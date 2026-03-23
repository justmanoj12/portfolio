

const Footer = () => {
  return (
    <footer id="contact" className="w-full max-w-[1920px] mx-auto bg-[#050505] text-white overflow-hidden relative selection:bg-[#ff5e00] selection:text-white pb-16 md:pb-24 pt-32 md:pt-48 px-8 md:px-16 flex flex-col items-center border-[20px] border-[#0a0a0a] rounded-t-[3rem] md:rounded-t-[6rem]">
      
      {/* Top Tagline */}
      <div className="flex items-center gap-4 mb-16 md:mb-24 opacity-60">
        <div className="w-12 md:w-24 h-[1px] bg-white/20"></div>
        <p className="text-[9px] md:text-[11px] font-bold tracking-[0.4em] text-white uppercase">
          READY TO COLLABORATE?
        </p>
        <div className="w-12 md:w-24 h-[1px] bg-white/20"></div>
      </div>

      {/* Massive Typographic Hero */}
      <div className="flex flex-col items-center text-center mb-32 md:mb-48 relative z-10 w-full">
        <h2 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] font-light tracking-tight leading-[0.9] text-white/90">
          Let's<br/>Build The
        </h2>
        
        {/* The word "unexpected" */}
        <div className="relative inline-block mt-2 md:mt-0">
          <h2 className="text-[70px] sm:text-[90px] md:text-[120px] lg:text-[140px] xl:text-[160px] font-serif italic text-[#ff6a00] leading-[0.8] lowercase relative z-10" style={{ fontFamily: '"Playfair Display", serif' }}>
            unexpected
          </h2>
          {/* Subtle underline graphic */}
          <div className="absolute -bottom-4 md:-bottom-6 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#ff6a00]/50 to-transparent z-0"></div>
        </div>
      </div>

      {/* Bottom Footer Details Layer */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-0 mt-auto border-t border-white/10 pt-12 md:pt-16 uppercase">
        
        {/* Left: Email */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <p className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-[#ff5e00]">
            DIRECT INQUIRIES
          </p>
          <a 
            href="mailto:manojmma10@gmail.com" 
            className="text-lg md:text-2xl lg:text-3xl font-normal tracking-tight hover:text-[#ff5e00] transition-colors inline-block pb-2 border-b border-white/20 hover:border-[#ff5e00] w-max truncate cursor-pointer"
          >
            MANOJMMA10@GMAIL.COM
          </a>
        </div>

        {/* Right: Socials */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 md:items-end">
          <p className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-[#ff5e00]">
            SOCIAL PRESENCE
          </p>
          <div className="flex items-center gap-8 md:gap-12 text-sm md:text-base font-medium tracking-widest text-slate-300">
            <a 
              href="https://github.com/justmanoj12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white hover:translate-x-1 transition-all group flex items-center gap-2"
            >
              GITHUB <span className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 transition-all">↗</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white hover:translate-x-1 transition-all group flex items-center gap-2"
            >
              LINKEDIN <span className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 transition-all">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Layer */}
      <div className="w-full flex justify-center mt-24 text-[10px] tracking-[0.3em] text-white/30 uppercase font-bold">
        © {new Date().getFullYear()} Manoj Kumar G.
      </div>
    </footer>
  );
};

export default Footer;
