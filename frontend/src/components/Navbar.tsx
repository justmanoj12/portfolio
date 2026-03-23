import { motion } from 'framer-motion';

const itemVariants = {
  hover: { scale: 1.05, transition: { type: "spring" as const, stiffness: 400, damping: 25 } },
  tap: { scale: 0.95, transition: { type: "spring" as const, stiffness: 400, damping: 25 } }
};

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} 
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1100px] bg-white/70 backdrop-blur-2xl rounded-full px-5 lg:px-6 py-3 flex items-center justify-between z-[100] shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-white/40"
    >
      <div className="flex items-center">
        <motion.a 
          href="/" 
          className="flex items-center origin-left"
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-10 md:h-12 w-auto object-contain drop-shadow-sm ml-2"
          />
        </motion.a>
      </div>

      <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold tracking-[0.25em] text-slate-800 uppercase">
        <motion.button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#ff5e00] transition-colors" variants={itemVariants} whileHover="hover" whileTap="tap">About</motion.button>
        <motion.button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#ff5e00] transition-colors" variants={itemVariants} whileHover="hover" whileTap="tap">Projects</motion.button>
        <motion.button onClick={() => document.getElementById('certification')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#ff5e00] transition-colors" variants={itemVariants} whileHover="hover" whileTap="tap">Certifications</motion.button>
        <motion.button onClick={() => document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#ff5e00] transition-colors" variants={itemVariants} whileHover="hover" whileTap="tap">Stack</motion.button>
        <motion.button onClick={() => document.getElementById('training')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#ff5e00] transition-colors" variants={itemVariants} whileHover="hover" whileTap="tap">Training</motion.button>
        
        <motion.a 
          href="/Manoj.cv%20(2).pdf" 
          download="manoj.cv"
          className="hover:text-[#ff5e00] transition-colors"
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Resume
        </motion.a>
      </div>

      <motion.button 
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
        className="bg-black text-white px-7 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-slate-800 transition-colors shadow-sm"
        variants={itemVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Contact
      </motion.button>
    </motion.div>
  );
}
