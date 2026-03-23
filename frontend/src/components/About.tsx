import { motion } from 'framer-motion';

export default function About() {
  const text = "AI • AUTOMATION • DESIGN • ENGINEERING • ";
  const characters = text.split("");

  return (
    <section id="about" className="w-full max-w-[1920px] mx-auto py-24 md:py-32 px-8 md:px-16 bg-white border-x border-slate-100 relative overflow-hidden">

      {/* Top Info Banner */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center border-y border-slate-100 py-6 md:py-8 mb-20 md:mb-32 relative z-20 gap-8 md:gap-0">

        {/* Col 1 */}
        <div className="flex flex-col gap-2 w-full md:w-1/4 pr-4 md:border-r border-slate-100">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="w-3 h-3 text-[#ff5e00]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
            </motion.div>
            <span className="text-[10px] md:text-[8px] lg:text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase">Available For</span>
          </div>
          <span className="text-sm md:text-xs lg:text-sm font-semibold text-slate-800 tracking-wide uppercase">Freelance & Roles</span>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-2 w-full md:w-1/4 md:px-8 md:border-r border-slate-100">
          <span className="text-[10px] md:text-[8px] lg:text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase">Specialization</span>
          <span className="text-sm md:text-xs lg:text-sm font-semibold text-slate-800 tracking-wide uppercase"> Fullstack</span>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-2 w-full md:w-1/4 md:px-8 md:border-r border-slate-100">
          <span className="text-[10px] md:text-[8px] lg:text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase">Contact</span>
          <span className="text-sm md:text-xs lg:text-sm font-semibold text-slate-800 tracking-wide uppercase">Karnataka, India</span>
        </div>

        {/* Col 4 */}
        <div className="flex flex-col gap-2 w-full md:w-1/4 md:pl-8">
          <span className="text-[10px] md:text-[8px] lg:text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase">Opportunities</span>
          <span className="text-sm md:text-xs lg:text-sm font-semibold text-slate-800 tracking-wide uppercase">Open For Remote Internships</span>
        </div>

      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 relative z-10 w-full max-w-7xl mx-auto">

        {/* Left Side - Typography Logo & Title */}
        <div className="w-full lg:w-[25%] flex flex-col items-center lg:items-start relative">
          {/* Spinning Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full flex items-center justify-center shrink-0 mb-8 mx-auto lg:mx-0"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-0 w-full h-full text-slate-400 text-[13px] md:text-[16px] font-bold tracking-[0.3em]"
            >
              {characters.map((char, i) => (
                <div
                  key={i}
                  className="absolute inset-0 origin-center"
                  style={{ transform: `rotate(${i * (360 / characters.length)}deg)` }}
                >
                  <span className="absolute top-0 left-1/2 -translate-x-1/2">{char}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Overlapping "About me" Title */}
          <div className="relative -mt-32 md:-mt-48 lg:-mt-52 z-10 flex flex-col items-center lg:items-start pl-0 lg:-ml-8">
            <h2 className="text-[100px] md:text-[140px] lg:text-[160px] leading-none tracking-tighter text-black font-normal -ml-1 md:-ml-2">About</h2>
            <div className="flex items-center gap-4 mt-[-20px] md:mt-[-40px]">
              <h2 className="text-[90px] md:text-[140px] lg:text-[160px] leading-none text-[#ff5e00] font-serif italic lowercase tracking-tight pl-2 md:pl-8">me</h2>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8 md:mt-12 w-full pl-0 lg:pl-4">
              <div className="w-8 md:w-16 h-[1px] md:h-[2px] bg-[#ff5e00]"></div>
              <p className="text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase text-slate-400 whitespace-nowrap">GenAI & Fullstack</p>
            </div>
          </div>
        </div>

        {/* Right Side - Information */}
        <div className="w-full lg:w-[75%] flex flex-col mt-16 lg:mt-32 lg:pl-16">

          {/* Text Paragraphs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-20 md:mb-32">
            <p className="text-lg md:text-xl leading-[1.8] text-slate-500 font-light">
              I am a passionate Computer Science and Engineering student currently pursuing my Bachelor of Technology at <span className='font-semibold text-slate-800'>Lovely Professional University, Phagwara</span>. I completed my intermediate education securing 86% , and my matriculation with 92% both at <span className='font-semibold text-slate-800'>Pupil Tree PU College, Ballari</span>, and  building a strong academic foundation. <span className="font-semibold text-slate-800">web platforms, AI systems</span>, and <span className="font-semibold text-slate-800">automation</span>, turning ambitious ideas into real, usable software.
            </p>
            <p className="text-lg md:text-xl leading-[1.8] text-slate-500 font-light">
              I’m interested in full-stack development with experience in<span className='font-semibold text-slate-800'> React, Node.js, PHP, JavaScript, and Tailwind CSS</span>. I’ve built projects like a virtual exhibition platform, an e-learning system, and a chatbot, strengthening my frontend and backend skills. I also have Flutter and Dart training for cross-platform apps and API integration, and I continuously improve my skills to build scalable solutions.            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full group/cards">
            {/* Card 1 */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 border border-slate-100 rounded-[2rem] md:rounded-[3rem] bg-[#fdfdfd] shadow-[0_4px_30px_-4px_rgba(0,0,0,0.03)] aspect-[3/4] md:aspect-[2.5/4] transition-all duration-500 hover:scale-[1.02] hover:border-[#ff5e00] hover:shadow-[0_0_20px_rgba(255,94,0,0.3)] cursor-default">
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase mb-auto mt-4 px-2 text-center">B.Tech</span>
              <span className="text-2xl md:text-3xl font-light text-black mb-auto">CSE</span>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 border border-slate-100 rounded-[2rem] md:rounded-[3rem] bg-[#fdfdfd] shadow-[0_4px_30px_-4px_rgba(0,0,0,0.03)] aspect-[3/4] md:aspect-[2.5/4] transition-all duration-500 hover:scale-[1.02] hover:border-[#ff5e00] hover:shadow-[0_0_20px_rgba(255,94,0,0.3)] cursor-default">
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase mb-auto mt-4 px-2 text-center">Location</span>
              <span className="text-2xl md:text-3xl font-light text-black mb-auto">Phagwara</span>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 border border-slate-100 rounded-[2rem] md:rounded-[3rem] bg-[#fdfdfd] shadow-[0_4px_30px_-4px_rgba(0,0,0,0.03)] aspect-[3/4] md:aspect-[2.5/4] transition-all duration-500 hover:scale-[1.02] hover:border-[#ff5e00] hover:shadow-[0_0_20px_rgba(255,94,0,0.3)] cursor-default">
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase mb-auto mt-4 md:mt-2 px-2 text-center leading-tight">Focus</span>
              <div className="flex flex-col items-center gap-1 md:gap-2 text-center mb-auto w-full">
                <span className="text-base md:text-xl font-light text-black leading-none">FULL</span>
                <span className="text-base md:text-xl font-light text-black leading-none">STACK</span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center justify-center p-6 md:p-8 border border-slate-100 rounded-[2rem] md:rounded-[3rem] bg-[#fdfdfd] shadow-[0_4px_30px_-4px_rgba(0,0,0,0.03)] aspect-[3/4] md:aspect-[2.5/4] transition-all duration-500 hover:scale-[1.02] hover:border-[#ff5e00] hover:shadow-[0_0_20px_rgba(255,94,0,0.3)] cursor-default">
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase mb-auto mt-4 px-2 text-center">Status</span>
              <span className="text-xl md:text-xl lg:text-3xl font-light text-black mb-auto tracking-tight">ACTIVE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
