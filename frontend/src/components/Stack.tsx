import React, { useRef, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Layout,
  Globe,
  Cpu,
  Layers,
  Terminal,
  Zap,
  Network,
  Flame,
  Move,
  Box,
  GitBranch,
  Cloud,
  Send
} from 'lucide-react';

const stackCategories = [
  {
    title: "LANGUAGES",
    items: [
      { name: 'C++', icon: Code2, category: 'Language' },
      { name: 'Python', icon: Terminal, category: 'Language' },
      { name: 'Java', icon: Code2, category: 'Language' },
      { name: 'JavaScript', icon: Code2, category: 'Language' },
      { name: 'DSA', icon: Network, category: 'Concepts' },
    ]
  },
  {
    title: "WEB & BACKEND",
    items: [
      { name: 'React.js', icon: Globe, category: 'Frontend' },
      { name: 'Next.js', icon: Layers, category: 'Framework' },
      { name: 'Node.js', icon: Server, category: 'Backend' },
      { name: 'Express.js', icon: Cpu, category: 'Backend' },
      { name: 'MongoDB', icon: Database, category: 'Database' },
      { name: 'Firebase', icon: Flame, category: 'Backend' },
    ]
  },
  {
    title: "UI, 3D & ANIMATION",
    items: [
      { name: 'Tailwind CSS', icon: Layout, category: 'Styling' },
      { name: 'Framer Motion', icon: Zap, category: 'Animation' },
      { name: 'GSAP', icon: Move, category: 'Animation' },
      { name: 'Three.js', icon: Box, category: '3D' },
    ]
  },
  {
    title: "TOOLS & PLATFORMS",
    items: [
      { name: 'Git & GitHub', icon: GitBranch, category: 'Version Control' },
      { name: 'Vercel', icon: Cloud, category: 'Deployment' },
      { name: 'Postman', icon: Send, category: 'API Testing' },
    ]
  }
];

const MagneticItem = ({ children, isDimmed }: { children: React.ReactNode, isDimmed: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{
        x: position.x,
        y: position.y,
        scale: isDimmed ? 0.95 : 1,
        opacity: isDimmed ? 0.4 : 1
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
};

// Floating background geometry
const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      animate={{ rotate: 360, y: [0, -30, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute border-[2px] border-[#ff5e00]/20 w-32 h-32 rounded-full top-[15%] left-[10%]"
    />
    <motion.div
      animate={{ rotate: -360, y: [0, 40, 0], x: [0, 20, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute border-[2px] border-black/5 w-24 h-24 top-[60%] right-[15%]"
    />
    <motion.div
      animate={{ rotate: 180, scale: [1, 1.2, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      className="absolute border-[2px] border-[#ff5e00]/15 w-16 h-16 rounded-[10px] bottom-[20%] left-[20%] rotate-45"
    />
    <motion.div
      animate={{ y: [0, -50, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bg-[#ff5e00]/5 w-64 h-64 rounded-full bottom-[10%] right-[10%] blur-[40px]"
    />
  </div>
);

// Marquee Text
const InfiniteText = () => (
  <div className="absolute top-1/2 left-0 w-full overflow-hidden -translate-y-1/2 pointer-events-none z-0 select-none opacity-[0.03]">
    <motion.div
      animate={{ x: [0, -2000] }}
      transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      className="whitespace-nowrap font-black text-black pointer-events-none"
      style={{ fontSize: "250px", lineHeight: 1 }}
    >
      TECHNOLOGY · INNOVATION · DIGITAL CONSTRUCTION · CREATIVE DEVELOPMENT ·
    </motion.div>
  </div>
);

export default function Stack() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // 3D Tilt Logic
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D rotation
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Convert mouse position to rotation degrees (-10deg to 10deg)
  const rotateX = useTransform(smoothY, [-500, 500], [8, -8]);
  const rotateY = useTransform(smoothX, [-500, 500], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  // Floating orange particles
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 10,
      xMove: [0, Math.random() * 80 - 40, Math.random() * 80 - 40],
      opacity: [0, Math.random() * 0.6 + 0.2, 0],
    }));
  }, []);

  return (
    <section
      id="stack"
      className="relative min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-8 bg-white overflow-hidden font-sans"
    >
      <InfiniteText />
      <FloatingShapes />

      {/* Mesmerizing Background Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ x: [0, 200, 0], y: [0, -150, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-[10%] w-[35rem] h-[35rem] bg-[#ff5e00]/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -200, 0], y: [0, 150, 0], scale: [1, 1.4, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-[10%] w-[40rem] h-[40rem] bg-orange-400/10 rounded-full blur-[150px]"
        />

        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-[#ff5e00] rounded-full"
            style={{ width: p.size, height: p.size, left: p.left, bottom: -50 }}
            animate={{ y: [0, -1500], x: p.xMove, opacity: p.opacity }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
          />
        ))}
      </div>

      {/* 3D Tilt Card Container */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 1500 }}
        className="relative z-30 w-full max-w-6xl mx-auto cursor-default"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] md:rounded-[3rem] bg-white/70 backdrop-blur-3xl border border-white/80 p-6 sm:p-10 md:p-16 shadow-[0_30px_60px_-15px_rgba(255,94,0,0.15)] overflow-hidden"
        >
          {/* Inner Light Reflection (Gloss/Glass effect) */}
          <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white to-transparent opacity-60 pointer-events-none rounded-t-[3rem]" />

          {/* Card Border Glow Pulse */}
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] shadow-[inset_0_0_40px_rgba(255,94,0,0.1)] pointer-events-none"
          />

          <div className="text-center mb-12 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#ff5e00]/10 border border-[#ff5e00]/20 text-[#ff5e00] text-xs font-bold tracking-widest uppercase mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff5e00] animate-ping" />
              Live Technology Arsenal
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-8xl font-black text-black mb-6 tracking-tighter"
            >
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e00] to-orange-400">Stack</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-slate-500 max-w-2xl mx-auto text-base md:text-xl font-medium tracking-tight mt-6"
            >
              A carefully curated selection of modern frameworks, robust languages, and powerful tools that turn ideas into reality.
            </motion.p>
          </div>

          {/* Categorized Stack Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 xl:gap-12 relative z-10 w-full" onMouseLeave={() => setHoveredId(null)}>
            {stackCategories.map((category, catIndex) => (
              <div key={category.title} className="w-full flex flex-col">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 + 0.3 }}
                  className="text-xl md:text-2xl font-black mb-6 text-black border-l-4 border-[#ff5e00] pl-4 uppercase tracking-tighter"
                >
                  {category.title}
                </motion.h3>

                <motion.div
                  className="flex flex-col gap-4 md:gap-5 flex-1"
                  variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {category.items.map((item) => {
                    const isDimmed = hoveredId !== null && hoveredId !== item.name;

                    return (
                      <motion.div
                        key={item.name}
                        variants={{
                          hidden: { opacity: 0, y: 30, scale: 0.9 },
                          show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
                        }}
                        onMouseEnter={() => setHoveredId(item.name)}
                        className="stack-item group relative p-4 rounded-[1.25rem] bg-white border border-slate-100 shadow-sm hover:border-[#ff5e00]/30 hover:shadow-[0_15px_30px_-10px_rgba(255,94,0,0.15)] transition-all duration-500 cursor-pointer z-10 w-full"
                      >
                        <MagneticItem isDimmed={isDimmed}>
                          <div className="flex items-center gap-4 h-full pointer-events-none w-full relative">
                            {/* Icon Container */}
                            <div className="relative">
                              <motion.div
                                className="relative p-4 md:p-5 rounded-[1rem] bg-slate-50 text-black group-hover:text-white group-hover:bg-[#ff5e00] transition-colors duration-500 shadow-inner z-10 flex items-center justify-center"
                                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                                transition={{ duration: 0.5 }}
                              >
                                <item.icon size={36} strokeWidth={1.5} className="md:w-10 md:h-10" />
                              </motion.div>
                              {/* Glow ring on hover */}
                              <div className="absolute inset-0 bg-[#ff5e00] rounded-[1rem] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                            </div>

                            <div className="flex flex-col text-left">
                              <h3 className="text-sm md:text-base font-bold text-black group-hover:text-[#ff5e00] transition-colors duration-300">
                                {item.name}
                              </h3>
                              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">
                                {item.category}
                              </p>
                            </div>
                          </div>
                        </MagneticItem>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
