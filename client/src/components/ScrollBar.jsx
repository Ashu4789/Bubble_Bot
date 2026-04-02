import { useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

// --- Custom SVGs ---

const RoboticBoat = () => (
    <svg width="60" height="36" viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main Hull - Sleek Metallic */}
        <path d="M4 22L8 32H52L56 22H4Z" fill="#1E293B" stroke="#00E5FF" strokeWidth="1.5" />
        {/* Upper SENSORS & Deck */}
        <rect x="18" y="14" width="24" height="8" rx="2" fill="#334155" stroke="#00E5FF" strokeWidth="1" />
        {/* Glowing Engine Intake */}
        <rect x="6" y="24" width="4" height="4" rx="1" fill="#00E5FF" className="animate-pulse" />
        <rect x="50" y="24" width="4" height="4" rx="1" fill="#00E5FF" className="animate-pulse" />
        {/* Radar/Antenna */}
        <path d="M30 14V6M30 6L36 2M30 6L24 2" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="36" cy="2" r="1.5" fill="#00E5FF" />
        <circle cx="24" cy="2" r="1.5" fill="#00E5FF" />
        {/* Status Light */}
        <circle cx="30" cy="18" r="2" fill="#00E5FF">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
    </svg>
);

const DebrisItem = ({ type }) => {
    if (type === 'bottle') {
        return (
            <svg width="16" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                <path d="M18 6V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v2" />
                <path d="M6 10v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10" />
                <path d="M6 6h12" />
            </svg>
        );
    }
    if (type === 'bag') {
        return (
            <svg width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
        );
    }
    return ( // Oil / Barrel
        <svg width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <path d="M7 7h10" />
            <path d="M7 17h10" />
        </svg>
    );
};

// --- Main Progress Component ---

const ScrollBar = () => {
    const { scrollYProgress } = useScroll();
    const [cleanedItems, setCleanedItems] = useState(new Set());
    
    // Generate static pollutant positions for this session
    const pollutants = useMemo(() => [
        { id: 1, x: 0.12, type: 'bottle', offset: -4 },
        { id: 2, x: 0.28, type: 'bag', offset: 2 },
        { id: 3, x: 0.45, type: 'barrel', offset: -8 },
        { id: 4, x: 0.62, type: 'bottle', offset: 6 },
        { id: 5, x: 0.78, type: 'bag', offset: -2 },
        { id: 6, x: 0.92, type: 'barrel', offset: 4 }
    ], []);

    // Spring-smoothed progress for boat movement
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 30,
        restDelta: 0.001
    });

    const boatX = useTransform(smoothProgress, [0, 1], ["2%", "98%"]);
    const cleanedPercentage = useTransform(smoothProgress, [0, 1], [0, 100]);

    // Check for collisions and update stats
    useEffect(() => {
        const unsub = scrollYProgress.on("change", (latest) => {
            pollutants.forEach(p => {
                if (latest >= p.x && !cleanedItems.has(p.id)) {
                    setCleanedItems(prev => new Set([...prev, p.id]));
                } else if (latest === 0) {
                    setCleanedItems(new Set());
                }
            });
        });
        return () => unsub();
    }, [scrollYProgress, pollutants, cleanedItems]);

    return (
        <div className="fixed bottom-0 left-0 w-full z-[100] pointer-events-none group">
            
            {/* HUD / Telemetry */}
            <div className="absolute -top-10 left-6 flex items-end gap-6 text-[10px] font-black italic tracking-widest uppercase">
                <div className="flex flex-col gap-1 border-l-2 border-cyan-glow pl-3 py-1 bg-navy-dark/40 backdrop-blur-md rounded-r-lg">
                    <span className="text-white/40">Cleaned Debris</span>
                    <span className="text-cyan-glow text-lg leading-none">{cleanedItems.size} <span className="text-xs text-white/20">/ {pollutants.length}</span></span>
                </div>
                <div className="flex flex-col gap-1 border-l-2 border-cyan-glow pl-3 py-1 bg-navy-dark/40 backdrop-blur-md rounded-r-lg">
                    <span className="text-white/40">Surface Purity</span>
                    <motion.span className="text-cyan-glow text-lg leading-none">
                        {Math.round((cleanedItems.size / pollutants.length) * 100)}%
                    </motion.span>
                </div>
            </div>

            {/* Path Labels (Desktop Only) */}
            <div className="absolute -top-4 w-full px-12 flex justify-between text-[8px] font-black uppercase text-white/10 tracking-[0.4em] hidden md:flex">
                <span>Extraction Zone 01-A</span>
                <span>Bio-Hazard Neutralized</span>
                <span>Deep Basin Recovery</span>
            </div>

            {/* Main Water Layer */}
            <div className="relative h-24 w-full bg-navy-dark/20 backdrop-blur-sm overflow-hidden">
                
                {/* SVG WAVE LAYER 1 (Deepest) */}
                <motion.svg 
                    animate={{ x: [-1000, 0] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 w-[4000px] h-20 opacity-20 text-cyan-glow" 
                    viewBox="0 0 1000 100" 
                    preserveAspectRatio="none"
                >
                    <path d="M0 50 C 250 10, 750 90, 1000 50 V 100 H 0 Z" fill="currentColor" />
                    <path d="M1000 50 C 1250 10, 1750 90, 2000 50 V 100 H 1000 Z" fill="currentColor" />
                </motion.svg>

                {/* SVG WAVE LAYER 2 (Mid) */}
                <motion.svg 
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 w-[4000px] h-16 opacity-30 text-cyan-glow" 
                    viewBox="0 0 1000 100" 
                    preserveAspectRatio="none"
                >
                    <path d="M0 50 C 250 90, 750 10, 1000 50 V 100 H 0 Z" fill="currentColor" />
                    <path d="M1000 50 C 1250 90, 1750 10, 2000 50 V 100 H 1000 Z" fill="currentColor" />
                </motion.svg>

                {/* Interaction Path */}
                <div className="relative mx-12 h-full">
                    
                    {/* Pollutants Display */}
                    {pollutants.map((p) => (
                        <AnimatePresence key={p.id}>
                            {!cleanedItems.has(p.id) && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: p.offset }}
                                    exit={{ 
                                        scale: 1.5, 
                                        opacity: 0, 
                                        y: -20, 
                                        filter: "blur(10px)"
                                    }}
                                    transition={{ duration: 0.6, ease: "backOut" }}
                                    style={{ left: `${p.x * 100}%` }}
                                    className="absolute bottom-6 -translate-x-1/2"
                                >
                                    <div className="relative group/debris">
                                        <motion.div
                                            animate={{ 
                                                rotate: [-5, 5, -5],
                                                y: [-2, 2, -2]
                                            }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <DebrisItem type={p.type} />
                                        </motion.div>
                                        
                                        {/* Floating Ring Overlay */}
                                        <div className="absolute inset-x-0 bottom-0 h-1 bg-red-500/20 blur-md rounded-full -z-10" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    ))}

                    {/* The Robotic Boat ASV */}
                    <motion.div
                        style={{ left: boatX }}
                        className="absolute bottom-4 -translate-x-1/2 z-20"
                    >
                        <div className="relative">
                            {/* Splash / Wake Particles (Animated CSS) */}
                            <div className="absolute -bottom-2 -left-4 w-12 h-4 overflow-hidden -z-10 opacity-40">
                                <motion.div 
                                    animate={{ x: [-20, 0], opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="w-full h-full bg-cyan-glow/40 blur-xl"
                                />
                            </div>

                            {/* Boat Visual */}
                            <motion.div
                                animate={{ 
                                    y: [-2, 2, -2],
                                    rotate: [-1, 1, -1] 
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="filter drop-shadow-[0_0_15px_rgba(0,229,255,0.6)]"
                            >
                                <RoboticBoat />
                            </motion.div>

                            {/* Internal HUD Pulse */}
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -inset-4 bg-cyan-glow rounded-full blur-2xl -z-10"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* SVG WAVE LAYER 3 (Front/Surface) */}
                <motion.svg 
                    animate={{ x: [-1000, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 w-[4000px] h-10 opacity-50 text-cyan-glow" 
                    viewBox="0 0 1000 100" 
                    preserveAspectRatio="none"
                >
                    <path d="M0 60 C 250 20, 750 100, 1000 60 V 100 H 0 Z" fill="currentColor" />
                    <path d="M1000 60 C 1250 20, 1750 100, 2000 60 V 100 H 1000 Z" fill="currentColor" />
                </motion.svg>

                {/* Bottom Glow Bar */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-cyan-glow shadow-[0_0_20px_rgba(0,229,255,1)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-glow/5 via-transparent to-transparent" />
            </div>

            {/* Collection Burst System (Simple Bubbles) */}
            <AnimatePresence>
                {cleanedItems.size > 0 && (
                    <motion.div 
                        key={cleanedItems.size}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed bottom-2 left-1/2 -translate-x-1/2 w-screen h-24 overflow-hidden pointer-events-none"
                    >
                        {/* Placeholder for localized particles if needed */}
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default ScrollBar;
