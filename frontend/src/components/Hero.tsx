import { motion } from 'framer-motion';
import { Download, ArrowDownRight, Github, Linkedin, Mail, FileText } from 'lucide-react';

/* --- Framer Motion Shared Variants --- */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const buttonVariants = {
  hover: { scale: 1.04, transition: { type: "spring" as const, stiffness: 400, damping: 25 } },
  tap: { scale: 0.96 }
};

export default function Hero() {

  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col pt-8 text-slate-900 border-x border-slate-100 max-w-[1920px] mx-auto">

      {/* Vertical Grid Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-evenly z-0">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-full w-[1px] bg-slate-100/80" />
        ))}
      </div>

      {/* Top spacer for global navbar */}
      <div className="h-16 md:h-24 w-full relative z-50 pointer-events-none" />

      {/* Horizontal Line */}
      <div className="w-full h-[1px] bg-slate-100 relative z-10" />

      {/* Main Content Area - Managed entirely by Framer Motion variant composition */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative flex-1 flex flex-col justify-center px-8 md:px-16 z-10 pt-16 pb-32"
      >
        <motion.div variants={fadeUpVariants} className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 tracking-[0.3em] text-[10px] font-bold text-slate-400 uppercase hidden xl:block origin-left">
          Full Stack Engineer
        </motion.div>

        {/* Big Name Component */}
        <div className="flex flex-col md:flex-row md:items-baseline gap-4 justify-center xl:justify-start mt-2 md:mt-4 z-40 relative pointer-events-none max-w-[100%] xl:max-w-[65%]">
          <motion.h1
            variants={fadeUpVariants}
            className="text-6xl sm:text-7xl md:text-[100px] xl:text-[130px] font-normal tracking-tighter leading-none text-black pointer-events-auto"
          >
            Manoj
          </motion.h1>
          <motion.h1
            variants={fadeUpVariants}
            className="text-6xl sm:text-7xl md:text-[80px] xl:text-[110px] font-serif italic text-[#ff5e00] leading-none lowercase pointer-events-auto"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            kumar g
          </motion.h1>
        </div>

        {/* Bottom Section Component */}
        <div className="flex flex-col xl:flex-row justify-between items-end mt-auto pt-20 gap-16 relative z-30 pointer-events-none">

          {/* Bottom Left - Text and Actions */}
          <div className="flex flex-col gap-10 w-full xl:max-w-xl relative z-40 pointer-events-auto">
            <motion.div
              variants={fadeUpVariants}
              className="w-full text-3xl md:text-3xl lg:text-4xl leading-tight font-light text-slate-400 text-center xl:text-left"
            >
              Building <span className="text-black font-medium">intelligent interfaces</span> where <span className="text-[#ff5e00] italic font-serif">great design</span> meets <span className="text-black font-medium italic">GenAI-powered</span> engineering.
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col items-center xl:items-start gap-6 w-full"
            >
              <div className="flex flex-col sm:flex-row gap-4 mb-2">
                {/* Explore works with motion micro-interactions */}
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-black text-white px-8 py-4 rounded-full text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors shadow-xl"
                >
                  Explore Works
                  <ArrowDownRight size={16} />
                </motion.button>
                {/* Download component with bounce */}
                <motion.a
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  href="/Manoj.cv%20(2).pdf"
                  download="manoj.cv"
                  className="bg-white text-black border border-slate-200 px-8 py-4 rounded-full text-xs font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-3 transition-colors shadow-sm hover:shadow-xl"
                >
                  View CV
                  <Download size={16} className="text-slate-400" />
                </motion.a>
              </div>

              {/* Social Navigation Buttons Container */}
              <div className="flex gap-4 pt-4">
                {[
                  { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/justmanoj12" },
                  { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/manoj130/" },
                  { icon: <Mail size={18} />, label: "Email", href: "mailto:manojmma10@gmail.com" },
                  { icon: <FileText size={18} />, label: "Resume", href: "/Manoj.cv%20(2).pdf", download: "manoj.cv" }
                ].map((social: any, idx) => (
                  <motion.a
                    key={idx}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    href={social.href}
                    onClick={(e) => {
                      if (social.href.startsWith("mailto:")) {
                        window.location.href = social.href;
                        e.preventDefault();
                      }
                    }}
                    download={social.download}
                    target={social.href.startsWith('http') ? "_blank" : "_self"}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : ""}
                    className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-black hover:border-black transition-colors bg-white cursor-pointer shadow-sm hover:shadow-lg"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Large Profile Picture floating bottom right */}
          <div className="absolute bottom-0 right-8 xl:right-16 z-10 hidden lg:flex items-end justify-center pointer-events-none h-[60vh] max-h-[600px] w-auto">
            <motion.img
              src="/images/profile.png"
              alt="Manoj Kumar G"
              initial={{ opacity: 0, y: 100, scale: 0.9, filter: "blur(20px)" }}
              animate={{
                opacity: 1,
                y: [0, -15, 0],   // Bobbing pattern automatically applied on render
                scale: 1,
                filter: "blur(0px)"
              }}
              transition={{
                opacity: { duration: 1.2, delay: 0.5 },
                scale: { duration: 1.2, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] },
                filter: { duration: 1.2, delay: 0.5 },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.7 } // Bobbing config
              }}
              whileHover={{
                scale: 1.05,
                filter: "brightness(1.1)",
                transition: { duration: 0.4 }
              }}
              className="h-full w-auto object-contain object-bottom pointer-events-auto cursor-pointer"
              style={{ originY: 1 }}
            />
          </div>

        </div>
      </motion.div>
    </section>
  );
}
