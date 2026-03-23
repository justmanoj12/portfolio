import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, type Variants } from 'framer-motion';
import { Github, Globe, ArrowUpRight, Zap, Code2, Layers } from 'lucide-react';

/* --- Framer Motion Shared Variants --- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const textRevealAnim: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80, damping: 20 } }
};

export default function ProjectGallery() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  const bgY1 = useTransform(smoothProgress, [0, 1], [0, 400]);
  const bgY2 = useTransform(smoothProgress, [0, 1], [0, -300]);

  const projects = [
    {
      id: "01",
      features: ["E-LEARNING", "FULL-STACK", "PLATFORM"],
      title: "SkillUp Online",
      description: "A comprehensive, full-stack educational platform built to scale. SkillUp Online provides an end-to-end learning environment where students can discover multimedia courses, enroll securely via integrated payment gateways, and track their comprehensive learning journey through interactive dashboards. The platform features automated certificate generation upon course completion, secure JWT authentication, and a robust admin panel for instructors to manage curriculum seamlessly.",
      mainPortions: ["Course Management", "Auth System", "Progress Tracking"],
      techStack: ["PHP", "TAILWIND CSS", "MYSQL", "JWT", "VIDEOS"],
      github: "https://github.com/justmanoj12/skill-up",
      demo: "#",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      icon: <Code2 size={20} className="text-[#ff5e00]" />
    },
    {
      id: "02",
      features: ["AI", "WEB BOT", "CHATBOT"],
      title: "Transit Scheduler",
      description: "Built an intelligent web-based chatbot system specifically designed to handle dynamic transit scheduling, fare calculations, and real-time route optimization. This platform eliminates the friction of manual travel searches by employing advanced Natural Language Processing to understand user queries, pulling live data from transportation APIs, and displaying optimized itineraries instantaneously within an intuitive chat interface.",
      mainPortions: ["Python Logic", "PHP Backend", "JS Frontend"],
      techStack: ["PYTHON", "PHP", "JAVASCRIPT", "NLP", "REST API"],
      github: "https://github.com/justmanoj12/Public-key-ibfrstudre",
      demo: "https://public-transist-tracker-7i35.onrender.com",
      image: "/images/transportation-logistics-services.jpg",
      icon: <Zap size={20} className="text-[#ff5e00]" />
    },
    {
      id: "03",
      features: ["E-COMMERCE", "WEB PLATFORM", "DASHBOARD"],
      title: "Virtual Exhibition",
      description: "An immersive Virtual Exhibition Platform designed to bridge the gap between physical showcases and digital accessibility. This platform enables global users to explore high-fidelity interactive digital booths, view detailed exhibit renderings, and seamlessly purchase featured items online. It incorporates advanced exhibitor dashboards for real-time analytics, real-time chat support, and dynamic spatial mapping, creating a truly barrier-free digital exhibition experience.",
      mainPortions: ["Exhibitor Dashboards", "Virtual Showcasing", "Online Sales"],
      techStack: ["REACT", "NODE.JS", "MONGODB", "EXPRESS", "SOCKET.IO"],
      github: "https://github.com/justmanoj12/virtual-exhibition-platform",
      demo: "https://virtual-exhibition-platform.vercel.app/",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop",
      icon: <Layers size={20} className="text-[#ff5e00]" />
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full max-w-[1920px] mx-auto py-32 md:py-48 px-8 md:px-16 bg-white text-black border-x border-slate-100 overflow-hidden relative shadow-sm"
    >
      {/* Light Mode Decorative Background Elements */}
      <motion.div
        style={{ y: bgY1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute top-[5%] left-[-15%] w-[800px] h-[800px] bg-gradient-to-tr from-[#fff0e5] to-transparent rounded-full blur-[100px] pointer-events-none z-0"
      />
      <motion.div
        style={{ y: bgY2 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-[#ff5e00]/10 to-transparent rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* Title Area */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="flex flex-col items-center justify-center mb-32 md:mb-40 mt-12 md:mt-24 pointer-events-none relative z-10"
      >
        <div className="flex overflow-hidden relative text-center">
          {Array.from("Project").map((char, i) => (
            <motion.span
              key={i}
              variants={textRevealAnim}
              className="text-[90px] md:text-[130px] lg:text-[160px] font-medium tracking-tighter leading-[0.8] text-black inline-block drop-shadow-sm"
            >
              {char}
            </motion.span>
          ))}
        </div>
        <div className="flex overflow-hidden relative text-center mt-2 z-20">
          {Array.from("gallery").map((char, i) => (
            <motion.span
              key={i}
              variants={textRevealAnim}
              className="text-[80px] md:text-[120px] lg:text-[150px] font-serif italic text-[#ff5e00] leading-[0.8] lowercase inline-block drop-shadow-sm"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex items-center gap-6 mt-16 md:mt-24 z-10 relative"
        >
          <div className="w-16 md:w-24 h-[1px] bg-slate-200"></div>
          <p className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] text-slate-400 uppercase whitespace-nowrap flex items-center gap-3">
            <motion.span
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-2 h-2 rounded-full bg-[#ff5e00] shadow-[0_0_10px_rgba(255,94,0,0.5)]"
            />
            Immersive Case Studies
          </p>
          <div className="w-16 md:w-24 h-[1px] bg-slate-200"></div>
        </motion.div>
      </motion.div>

      {/* Main Project List Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
        className="flex flex-col w-full max-w-7xl mx-auto gap-24 md:gap-32 mb-32 relative z-10"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  const imageScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  const imageY = useTransform(smoothProgress, [0, 1], ["-5%", "5%"]);

  return (
    <motion.div
      variants={itemVariants}
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 p-8 md:p-14 bg-white border border-slate-100 rounded-[3rem] md:rounded-[4rem] relative group/project shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(255,94,0,0.08)] hover:border-[#ff5e00]/20 transition-all duration-700"
    >
      {/* Flowing Top Border */}
      <motion.div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-[#ff5e00] to-transparent z-10 origin-left"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ width: "100%" }}
      />

      {/* Light Hover Element */}
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ff5e00] rounded-full blur-[120px] opacity-0 mix-blend-multiply pointer-events-none translate-x-1/2 -translate-y-1/2 z-0"
        animate={{ opacity: isHovered ? 0.05 : 0 }}
        transition={{ duration: 1 }}
      />

      {/* Left side text container */}
      <div className="flex flex-1 w-full relative z-10">

        {/* Giant Number Parallax */}
        <motion.div
          className="absolute -left-4 md:-left-8 lg:-left-12 -top-10 md:top-0 text-[160px] md:text-[220px] lg:text-[280px] font-black text-slate-200 leading-none select-none z-0 pointer-events-none tracking-tighter opacity-80 drop-shadow-sm"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ y: useTransform(smoothProgress, [0, 1], [60, -60]) }}
        >
          {project.id}
        </motion.div>

        <div className="flex flex-col relative z-20 w-full pl-4 md:pl-0 pt-16 md:pt-20">

          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Category Header */}
            <div className="flex justify-between items-center bg-white border border-slate-200 shadow-sm px-6 py-3 rounded-full w-fit mb-2">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#ff5e00] uppercase flex items-center gap-3">
                {project.icon}
                {project.features.join(' • ')}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-4xl md:text-5xl lg:text-[68px] font-medium tracking-tight text-black leading-[1.05] group-hover/project:text-[#ff5e00] transition-colors duration-500 bg-white/50 backdrop-blur-sm rounded-lg pr-4 -ml-2 pl-2">
              {project.title}
            </h3>

            {/* Thick Horizontal Rule Animated */}
            <motion.div
              className="w-16 h-[3px] bg-gradient-to-r from-[#ff5e00] to-transparent origin-left my-2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered ? 1 : 0.4 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Project Details Block (Expands on Hover) */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="pt-6 flex flex-col gap-8 overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* Extremely detailed description */}
                <p className="text-sm md:text-base text-slate-500 font-light leading-[1.8] max-w-2xl pt-2">
                  {project.description}
                </p>

                {/* Main Portions */}
                <div className="flex flex-col gap-3">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-[#ff5e00] uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]"></span> Core Architecture
                  </p>
                  <div className="flex gap-4 items-center">
                    {project.mainPortions.map((portion: string, i: number) => (
                      <React.Fragment key={i}>
                        <span className="text-xs md:text-sm font-medium text-black tracking-wide bg-slate-50 px-3 py-1 rounded-md border border-slate-100">
                          {portion}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-3 mt-2">
                  {project.techStack.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-5 py-2 rounded-[2rem] border border-slate-200 bg-white text-[9px] font-bold tracking-[0.2em] text-slate-500 uppercase shadow-sm transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Interactive Links with Intense Microinteractions */}
                <div className="flex items-center gap-6 mt-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-8 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-3 hover:bg-[#ff5e00] hover:shadow-[0_10px_30px_rgba(255,94,0,0.3)] transition-all duration-300"
                  >
                    <Globe size={18} strokeWidth={2.5} /> Live Deploy
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-black hover:bg-slate-100 transition-colors relative group h-14 w-14 flex flex-col justify-center items-center rounded-full border border-slate-200 bg-white shadow-sm"
                    title="View Source on GitHub"
                  >
                    <Github size={22} strokeWidth={1.5} />
                    <motion.div
                      className="absolute -top-1 -right-1 text-[#ff5e00] opacity-0 group-hover:opacity-100"
                      animate={{ y: [0, -3, 0], x: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      <ArrowUpRight size={14} strokeWidth={3} />
                    </motion.div>
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right side large image with Parallax and light hover effects */}
      <div className="w-full lg:w-[45%] xl:w-[50%] flex-shrink-0 z-30 mt-10 lg:mt-0 relative perspective-1000">
        <motion.div
          className="absolute top-[8%] -left-[10%] w-[120%] h-[120%] bg-gradient-to-br from-[#ff5e00]/10 to-transparent blur-[60px] rounded-full opacity-0 group-hover/project:opacity-100 transition-opacity duration-1000 -z-10 pointer-events-none"
        />

        <motion.a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block' }}
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="aspect-[16/11] md:aspect-[16/10] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-slate-50 relative shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-slate-100 cursor-pointer group/image transform-gpu"
        >
          {/* Subtle noise grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-20 pointer-events-none mix-blend-multiply" />

          <motion.img
            style={{ scale: imageScale, y: imageY }}
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-filter duration-700 filter group-hover/project:saturate-[1.1]"
          />

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/80 backdrop-blur-md rounded-full border border-white flex items-center justify-center opacity-0 group-hover/image:opacity-100 scale-50 group-hover/image:scale-100 transition-all duration-500 z-30 shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
          >
            <span className="text-black text-[10px] font-bold tracking-[0.2em] uppercase">View</span>
          </motion.div>
        </motion.a>
      </div>

    </motion.div>
  );
}
