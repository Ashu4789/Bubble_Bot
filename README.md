# Bubble_Bot - Autonomous Water Surface Cleaning Robot

**Team ID: SIH123** | **PSID: 1603**

Bubble_Bot is an advanced robotics solution designed for the autonomous cleanup of water bodies. Leveraging AI and IoT, it identifies and removes trash, oil slicks, and other pollutants with high efficiency and zero human intervention.

## 🚀 Key Features

- **Autonomous Navigation**: Uses Coverage Path Planning (CPP) algorithm for 100% surface coverage.
- **AI Object Detection**: Powered by NVIDIA Xavier NX (21 TOPS) for real-time waste identification.
- **Sensor Fusion**: Combines mmWave Radar, RGB Camera, IMU, and RTK-GNSS for precision movement.
- **Oil Absorption**: Modular Polyurethane foam system for surface oil recovery.
- **Harsh Condition Ready**: Built with Marine Grade Aluminum 6061 and HDPE.

## 🛠️ Technical Specifications

### Hardware
- **Processor**: NVIDIA Xavier NX Module (Main AI Engine) & ESP32 (Control Hub).
- **Sensors**: mmWave Radar, RGB Camera, IMU RTK-GNSS.
- **Materials**: 
  - Hull: High-Density Polyethylene (HDPE)
  - Cage: Aluminum 6061
  - Oil Collector: Polyurethane Foam (2mm)
- **Power**: 3 Hours continuous autonomous action per charge.

### Software Stack
- **Frontend**: React.js / Vite
- **Styling**: Vanilla CSS with modern aesthetics (Framer Motion for animations).
- **Algorithms**: Coverage Path Planning (CPP), Object Detection (YOLO/TensorRT).
- **Simulation**: Fusion 360 (Static Stress, Generative Design, Fluid Flow).

## 👥 Core Team (SIH123)
- **Sanjog Panda** - Team Lead / Engineering
- **Agnik Ray** - Mechanical Design (Fusion 360)
- **Aanchal Nishad** - AI & IoT Systems

## 💻 Setup & Installation

### Website (Frontend)
1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```

### Server (Backend)
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

---
*Developed for the Smart India Hackathon (SIH).*
