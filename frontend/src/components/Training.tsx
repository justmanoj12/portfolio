import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Calendar, Download, Sparkles, Layers, ArrowRight } from 'lucide-react';

interface TrainingCardData {
  title: string;
  date: string;
  subtitle: string;
  description: string;
  duties: string[];
  techStack: string[];
  type: string;
  file: string;
}

const letterAnim = {
  hidden: { y: 60, opacity: 0, scale: 0.9 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 100, damping: 12 } }
};

export default function Training() {
  const [data, setData] = useState<TrainingCardData[]>([]);
  const [loading, setLoading] = useState(true);

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Parallax elements for the background
  const y1 = useTransform(smoothProgress, [0, 1], [0, 300]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -200]);

  useEffect(() => {
    fetch('http://localhost:5000/api/training')
      .then(res => res.json())
      .then((json) => {
        if(json[0] && json[0].duties) {
           setData(json);
        } else {
           throw new Error("Outdated backend schema");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn("Serving fallback data:", err);
        setData([{
          title: "Mobile Application Developer Using Flutter",
          subtitle: "CERTIFICATE",
          date: "July 2025",
          description: "Successfully completed a hands-on training program in building cross-platform mobile applications using Flutter and Dart. Gained practical experience in designing responsive interfaces, managing app flow, and deploying functional mobile apps.",
          duties: [
            "Developed strong skills in widget-based UI development, state management, and integrating external services. Worked extensively with REST APIs, JSON data handling, and Firebase for backend connectivity.",
            "Flutter and Dart for cross-platform mobile app development. Firebase, REST APIs, and JSON for backend integration and data handling."
          ],
          techStack: ["Flutter", "Dart", "Firebase", "REST APIs", "JSON"],
          type: "TRAINING",
          file: "/Manoj.cv%20(2).pdf"
        }]);
        setLoading(false);
      });
  }, []);

  return (
    <section 
      id="training" 
      ref={containerRef}
      className="w-full max-w-[1920px] mx-auto py-32 md:py-48 px-8 md:px-16 bg-white text-black border-x border-slate-100 overflow-hidden relative flex flex-col items-center"
    >
      {/* Dynamic Bright Background Animations */}
      <motion.div 
        style={{ y: y1 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 90, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute top-[5%] left-[-15%] w-[800px] h-[800px] bg-gradient-to-tr from-[#ffe8d6] to-transparent rounded-full blur-[100px] pointer-events-none z-0"
      />
      <motion.div 
        style={{ y: y2 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, -90, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-[#ff5e00]/20 to-transparent rounded-full blur-[120px] pointer-events-none z-0"
      />
      
      {/* Smaller floating orbs */}
      <motion.div 
        animate={{ y: [0, -50, 0], x: [0, 30, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute top-[30%] right-[15%] w-40 h-40 bg-[#ff5e00] rounded-full blur-[80px] pointer-events-none z-0 mix-blend-multiply"
      />
      
      {/* Title Area */}
      <div className="flex flex-col mb-24 md:mb-32 w-full max-w-[1200px] pl-4 md:pl-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
          className="flex flex-wrap overflow-hidden relative"
        >
          {Array.from("Training").map((char, i) => (
            <motion.span 
              key={i} 
              variants={letterAnim}
              className="text-[80px] md:text-[120px] lg:text-[150px] font-normal tracking-tighter leading-[0.8] text-black inline-block z-10"
            >
              {char}
            </motion.span>
          ))}
          {/* Animated Sparkle */}
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.6, delay: 0.8, duration: 1.5 }}
            className="absolute right-[10%] md:right-[20%] top-[-15%] text-[#ff5e00] z-0"
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            >
              <Sparkles size={56} strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
          }}
          className="flex overflow-hidden ml-4 md:ml-16 mt-4"
        >
          {Array.from("milestone").map((char, i) => (
            <motion.span 
              key={i} 
              variants={letterAnim}
              className="text-[70px] md:text-[110px] lg:text-[140px] font-serif italic text-[#ff5e00] leading-[0.8] lowercase inline-block"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Minimalist Loading/Decorative Line */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="flex items-center gap-6 mt-16 pl-4 relative z-10"
        >
          <div className="w-24 h-[1px] bg-slate-300 relative overflow-hidden flex items-center">
             <motion.div 
                className="absolute inset-0 bg-[#ff5e00]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
             />
          </div>
          <p className="text-[10px] md:text-sm font-bold tracking-[0.4em] text-slate-400 uppercase">
            Professional <span className="text-black">Journey</span>
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center gap-16 relative z-10">
        {loading ? (
             <motion.div 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="flex items-center gap-4 text-slate-500 font-bold tracking-widest uppercase text-xs"
             >
               <span className="w-3 h-3 rounded-full bg-[#ff5e00] animate-pulse"></span>
               Loading Records...
             </motion.div>
        ) : (
          data.map((item, idx) => (
            <TrainingCard key={idx} item={item} index={idx} />
          ))
        )}
      </div>
    </section>
  );
}

function TrainingCard({ item, index }: { item: TrainingCardData, index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  // Individual card floating animation offset logic
  const floatDelay = index * 0.5;

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ 
        duration: 0.9, 
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
        layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="w-full relative group"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 5, delay: floatDelay, ease: "easeInOut" }}
        className="w-full bg-white/80 backdrop-blur-3xl rounded-[3rem] md:rounded-[4rem] p-8 md:p-14 border border-slate-100 flex flex-col md:flex-row relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(255,94,0,0.08)] transition-all duration-700 hover:border-[#ff5e00]/20"
      >
        {/* Soft Animated Background on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 z-0"/>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-[#ff5e00]/[0.02] via-transparent to-transparent z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ff5e00] rounded-full blur-[120px] opacity-0 mix-blend-multiply pointer-events-none translate-x-1/2 -translate-y-1/2 z-0"
          animate={{ opacity: isHovered ? 0.05 : 0 }}
          transition={{ duration: 1 }}
        />
        
        {/* Animated Border Top Line */}
        <motion.div 
          className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent z-10 origin-left"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: "100%" }}
        />

        {/* Date & Tags Column */}
        <motion.div 
          layout 
          className="w-full md:w-[22%] mb-12 md:mb-0 flex flex-col justify-between relative z-10"
        >
          <motion.div 
            className="flex items-center text-[#ff5e00] text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase gap-3 w-fit"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.div 
              animate={{ rotate: isHovered ? [0, -10, 10, -5, 5, 0] : 0 }}
              transition={{ duration: 0.6 }}
              className="p-2.5 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/20"
            >
              <Calendar size={18} strokeWidth={2.5} />
            </motion.div>
            {item.date}
          </motion.div>

          <div className="hidden md:flex flex-col gap-4 mt-auto">
            {item.techStack.map((tech, i) => (
                <motion.span 
                  key={i} 
                  initial={{ opacity: 0.7, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                  whileHover={{ opacity: 1, x: 8, backgroundColor: "#fff", borderColor: "#ff5e00", color: "#000" }}
                  className="px-6 py-3 rounded-full bg-white border border-slate-100 text-slate-500 text-[10px] font-bold tracking-[0.2em] shadow-sm w-max uppercase transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Main Column */}
        <motion.div 
          layout 
          className="w-full md:w-[60%] flex flex-col pr-0 md:pr-16 relative z-10"
        >
          <motion.h3 
            layout 
            className="text-4xl md:text-[50px] lg:text-[56px] font-medium tracking-tight text-black leading-[1.05] mb-6 transition-colors duration-[0.8s] group-hover:text-[#ff5e00] origin-left drop-shadow-sm"
          >
            {item.title}
          </motion.h3>
          
          <motion.p layout className="text-xs font-bold tracking-[0.3em] text-[#ff5e00] uppercase mb-8 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gradient-to-r from-[#ff5e00] to-transparent opacity-50"></span>
            <Layers size={14} className="opacity-80"/>
            {item.subtitle}
          </motion.p>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="overflow-hidden flex flex-col w-full origin-top"
              >
                <div className="pt-6 pb-2 flex flex-col gap-10">
                  
                  {/* Elegant Image Reveal */}
                  <motion.div 
                    initial={{ opacity: 0, clipPath: 'inset(10% 10% 10% 10% round 2rem)' }}
                    animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 2rem)' }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="w-full h-56 md:h-72 bg-slate-50 relative group/image shadow-lg"
                  >                     
                     <motion.img 
                       animate={{ scale: isHovered ? 1.05 : 1 }}
                       transition={{ duration: 6, ease: "easeOut" }}
                       src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop" 
                       alt="Training Experience" 
                       className="w-full h-full object-cover origin-center" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                     
                     <motion.div className="absolute bottom-6 left-6 z-20 flex flex-col gap-2">
                       <motion.div 
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.4 }}
                         className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-white text-[9px] font-bold tracking-[0.25em] uppercase border border-white/20 w-fit drop-shadow-lg"
                       >
                         Showcase
                       </motion.div>
                     </motion.div>
                  </motion.div>

                  <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-sm md:text-base text-slate-500 font-light leading-[1.8] max-w-2xl"
                  >
                    {item.description}
                  </motion.p>

                  <ul className="flex flex-col gap-5">
                    {item.duties.map((duty, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1), duration: 0.6, ease: "easeOut" }}
                        className="flex items-start group/list bg-[#f8fafc] rounded-2xl p-5 border border-slate-100 hover:border-[#ff5e00]/20 hover:bg-white hover:shadow-md transition-all duration-400"
                      >
                        <motion.div 
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.4 + (i * 0.1), type: "spring", bounce: 0.5 }}
                          className="bg-black text-white rounded-full p-1.5 mr-5 mt-1 flex-shrink-0 group-hover/list:bg-[#ff5e00] transition-colors duration-300 transform group-hover/list:translate-x-1"
                        >
                           <ArrowRight size={14} strokeWidth={2.5} />
                        </motion.div>
                        <span className="text-slate-600 font-normal leading-relaxed text-sm">{duty}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Tech Stack */}
          <motion.div layout className="flex md:hidden flex-wrap gap-2 mt-8">
            {item.techStack.map((tech, i) => (
                <span key={i} className="px-5 py-2.5 rounded-full bg-white border border-slate-100 text-slate-500 text-[9px] font-bold tracking-[0.2em] shadow-sm uppercase">
                  {tech}
                </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column (Type & Download Action) */}
        <motion.div 
          layout 
          className="w-full md:w-[18%] mt-8 md:mt-0 flex flex-col items-start md:items-end justify-between relative z-10"
        >
          <div className="flex items-center gap-2 text-slate-400 text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase">
            <motion.div 
              animate={{ 
                scale: isHovered ? [1, 1.3, 1] : 1, 
                backgroundColor: isHovered ? "#ff5e00" : "#cbd5e1" 
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full" 
            />
            {item.type}
          </div>
          
          <motion.a
            layout
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            href={item.file}
            target="_blank" 
            rel="noopener noreferrer"
            download="Training_Certificate"
            className="mt-10 md:mt-auto w-16 h-16 md:w-20 md:h-20 rounded-full border border-slate-200 bg-white flex items-center justify-center text-black shadow-md hover:text-white hover:bg-[#ff5e00] hover:border-[#ff5e00] hover:shadow-[0_10px_25px_rgba(255,94,0,0.4)] transition-all duration-400 cursor-pointer self-start md:self-end overflow-hidden relative group/btn"
            title="Download Certificate"
          >
            <motion.div 
               className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-full group-hover/btn:animate-[sweep_1s_ease-in-out_infinite]"
            />
            <motion.div
              animate={{ 
                y: isHovered ? [0, 3, -3, 0] : 0,
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Download size={24} className="stroke-[2]" />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
