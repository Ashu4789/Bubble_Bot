import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Technology from '../components/sections/Technology';
import DesignFeatures from '../components/sections/DesignFeatures';
import Workflow from '../components/sections/Workflow';
import Engineering from '../components/sections/Engineering';
import Performance from '../components/sections/Performance';
import Future from '../components/sections/Future';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <Hero />
      <About />
      <Technology />
      <DesignFeatures />
      <Workflow />
      <Engineering />
      <Performance />
      <Future />
    </motion.div>
  );
};

export default Home;
