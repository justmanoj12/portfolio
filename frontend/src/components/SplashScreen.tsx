import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{ y: "-100vh", opacity: 0, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center font-sans tracking-tight origin-top"
    >
      <div className="flex flex-col items-center mt-[-5%]">
        <div className="flex items-center gap-4 overflow-hidden pt-4 pb-2">
          <motion.h1 
            initial={{ y: 180, opacity: 0, rotate: 5 }} 
            animate={{ y: 0, opacity: 1, rotate: 0 }} 
            transition={{ duration: 1.8, type: 'spring', bounce: 0.2, delay: 0.1 }}
            className="text-white text-[50px] sm:text-[60px] md:text-[90px] font-normal tracking-tighter leading-none uppercase"
          >
            MANOJ
          </motion.h1>
          <motion.h1 
            initial={{ y: 180, opacity: 0, rotate: -5 }} 
            animate={{ y: 0, opacity: 1, rotate: 0 }} 
            transition={{ duration: 1.8, type: 'spring', bounce: 0.2, delay: 0.3 }}
            className="text-[#ff5e00] text-[50px] sm:text-[60px] md:text-[100px] font-serif italic lowercase tracking-tighter leading-none mt-2 md:mt-4"
          >
            kumar g
          </motion.h1>
        </div>

        <div className="w-[180px] h-[1px] bg-[#ff5e00] opacity-80 mt-4 mb-6 md:mb-8"></div>

        <div className="flex items-end gap-3 md:gap-4">
          <span className="text-[#333333] text-[50px] md:text-[60px] font-light leading-none font-mono">
            {progress}
          </span>
          <div className="flex items-center gap-2 mb-2 md:mb-3">
            <span className="text-[#ff5e00] tracking-[0.4em] text-[8px] md:text-[10px] font-bold uppercase whitespace-pre">
              .......... INITIALIZING
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
