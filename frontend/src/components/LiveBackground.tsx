import { motion } from 'framer-motion';

export default function LiveBackground() {
  return (
    <div className="fixed inset-0 z-[40] pointer-events-none overflow-hidden bg-transparent flex justify-center lg:justify-end items-center">
      
      {/* Dynamic Background Glowing Atmosphere */}
      <motion.div
        animate={{ x: [0, 150, -100, 0], y: [0, -200, 150, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[1000px] max-h-[1000px] rounded-full bg-[#ff5e00]/[0.1] blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -200, 150, 0], y: [0, 250, -150, 0], scale: [1, 1.4, 0.8, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[5%] w-[60vw] h-[60vw] max-w-[1200px] max-h-[1200px] rounded-full bg-blue-500/[0.1] blur-[100px]"
      />

      {/* MESMERIZING CARTOON FLOATING ROBOT */}
      <motion.div 
        animate={{ 
          y: [0, -50, 0],
          rotate: [-3, 3, -3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-[10%] right-[-10%] lg:right-[5%] w-[600px] h-[700px] opacity-80 xl:opacity-90 transition-opacity duration-[2000ms] mix-blend-multiply drop-shadow-[0_20px_50px_rgba(255,94,0,0.3)]"
      >
        <svg viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          
          {/* Main Head Base */}
          <rect x="100" y="100" width="300" height="250" rx="80" fill="#f8fafc" stroke="#ff5e00" strokeWidth="12"/>
          
          {/* Glowing Monitor Face */}
          <rect x="130" y="140" width="240" height="120" rx="40" fill="#0f172a" />
          
          {/* Left Animated Eye */}
          <motion.circle 
            cx="180" cy="200" r="22" fill="#ff5e00"
            animate={{ 
              scale: [1, 1.3, 0.1, 1], // The 0.1 represents a mechanical blink!
              opacity: [0.8, 1, 0, 1] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: 'drop-shadow(0 0 15px #3b82f6)' }}
          />
          
          {/* Right Animated Eye */}
          <motion.circle 
            cx="320" cy="200" r="22" fill="#ff5e00"
            animate={{ 
              scale: [1, 1.3, 0.1, 1], 
              opacity: [0.8, 1, 0, 1] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
            style={{ filter: 'drop-shadow(0 0 15px #3b82f6)' }}
          />

          {/* Robot Ears / Signal Receivers */}
          <rect x="70" y="180" width="30" height="80" rx="10" fill="#cbd5e1" stroke="#ff5e00" strokeWidth="6" />
          <rect x="400" y="180" width="30" height="80" rx="10" fill="#cbd5e1" stroke="#ff5e00" strokeWidth="6" />

          {/* Top Antenna Pole */}
          <line x1="250" y1="100" x2="250" y2="40" stroke="#ff5e00" strokeWidth="10" strokeLinecap="round" />
          
          {/* Top Glowing Antenna Bulb */}
          <motion.circle 
            cx="250" cy="30" r="18" fill="#10b981"
            animate={{ fill: ["#10b981", "#3b82f6", "#ff5e00", "#10b981"], scale: [1, 1.5, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{ filter: 'drop-shadow(0 0 25px rgba(59,130,246,0.8))' }}
          />

          {/* Floating Robot Body */}
          <path d="M 150 400 Q 250 450 350 400 L 320 550 Q 250 600 180 550 Z" fill="#e2e8f0" stroke="#ff5e00" strokeWidth="10"/>
          
          {/* Central Reactor Core */}
          <motion.circle 
            cx="250" cy="470" r="40" fill="#3b82f6"
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            style={{ filter: 'drop-shadow(0 0 40px #3b82f6)' }}
          />
          
          {/* Left Articulated Arm */}
          <motion.path 
            d="M 130 420 Q 50 470 70 550" 
            stroke="#ff5e00" strokeWidth="16" strokeLinecap="round" fill="none"
            animate={{ d: ["M 130 420 Q 50 470 70 550", "M 130 420 Q 20 500 80 580", "M 130 420 Q 50 470 70 550"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Right Articulated Arm */}
          <motion.path 
            d="M 370 420 Q 450 470 430 550" 
            stroke="#ff5e00" strokeWidth="16" strokeLinecap="round" fill="none"
            animate={{ d: ["M 370 420 Q 450 470 430 550", "M 370 420 Q 480 500 420 580", "M 370 420 Q 450 470 430 550"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>

        {/* Floating Particles / Data Streams spinning around the robot */}
        {[...Array(8)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute rounded-full"
             style={{ 
               width: `${Math.random() * 15 + 5}px`, 
               height: `${Math.random() * 15 + 5}px`, 
               backgroundColor: i % 2 === 0 ? '#ff5e00' : '#3b82f6',
               filter: 'blur(4px)',
               left: '50%',
               top: '50%'
             }}
             animate={{
                x: [
                  Math.cos(i * (Math.PI / 4)) * 200, 
                  Math.cos((i + 2) * (Math.PI / 4)) * 300, 
                  Math.cos(i * (Math.PI / 4)) * 200
                ],
                y: [
                  Math.sin(i * (Math.PI / 4)) * 200, 
                  Math.sin((i + 2) * (Math.PI / 4)) * 300, 
                  Math.sin(i * (Math.PI / 4)) * 200
                ],
             }}
             transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
           />
        ))}
      </motion.div>

      {/* Static Noise Grain */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay z-[-99] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

    </div>
  );
}
