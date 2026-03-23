import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificationsList = [
  {
    category: "CERTIFICATION",
    title: "Introduction to Hardware and Operating Systems",
    source: "IBM",
    year: "Dec 2024",
    description: "Gained foundational knowledge of computer hardware components, operating system functions, system architecture, and how software interacts with hardware in real-world computing environments.",
    file: "/pdfs/IBM.pdf"
  },
  {
    category: "CERTIFICATION",
    title: "The Bits and Bytes of Computer Networking",
    source: "Google",
    year: "Sep 2024",
    description: "Learned core networking concepts including protocols, IP addressing, DNS, network models, and troubleshooting, along with an understanding of how data is transmitted across networks and the internet.",
    file: "/pdfs/Google.pdf"
  },
  {
    category: "CERTIFICATION",
    title: "Legacy Responsive Web Design Course",
    source: "FreeCodeCamp",
    year: "Nov 2023",
    description: "Developed skills in HTML and CSS to build responsive and accessible web pages, focusing on layout design, styling, and creating user-friendly interfaces across different devices.",
    file: "/pdfs/Free code camp.png"
  }
];

const CertificationCard = ({ cert, index }: { cert: typeof certificationsList[0], index: number }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <div className={`w-full border rounded-[2rem] md:rounded-[3rem] transition-colors duration-500 overflow-hidden mb-8 ${isExpanded ? 'border-[#ff5e00]/30' : 'border-slate-200'}`}>
      {/* Main Row */}
      <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-8 md:gap-0 bg-white z-10 relative">
        
        {/* Left side */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center w-full">
            <span className="text-4xl md:text-[55px] font-light text-[#ff5e00]/40 mr-6 md:mr-10 mb-4 md:mb-0">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col pt-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]"></div>
                <span className="text-[9px] md:text-[10px] font-bold text-[#ff5e00] tracking-[0.25em] uppercase">{cert.category}</span>
              </div>
              <h3 className="text-xl md:text-[28px] md:leading-tight font-normal text-black tracking-tight mb-2 max-w-2xl">{cert.title}</h3>
              <span className="text-[9px] md:text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase">{cert.source}</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-8 md:gap-12 self-end md:self-auto mt-6 md:mt-0">
          <div className="flex flex-col items-end text-right hidden md:flex">
            <span className="text-sm md:text-base font-bold text-black tracking-wide">{cert.year}</span>
            <span className="text-[9px] md:text-[10px] font-bold text-slate-400 tracking-[0.25em] uppercase mt-1">{cert.source}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href={cert.file} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 shadow-sm hover:shadow-md transition-all shrink-0 text-slate-600 hover:text-black"
              title="View Certification"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </a>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black flex items-center justify-center hover:bg-[#ff5e00] transition-colors shrink-0 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-4 md:w-5 h-[2px] bg-white absolute"></div>
                <div className={`w-4 md:w-5 h-[2px] bg-white absolute transition-transform duration-300 ${isExpanded ? 'rotate-0 opacity-0' : 'rotate-90 opacity-100'}`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full bg-white px-8 md:px-12 pb-8 md:pb-12"
          >
            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-6 md:gap-16">
              <div className="flex flex-col items-start gap-2 min-w-[150px]">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-[#ff5e00] mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span className="text-[9px] md:text-[10px] font-bold text-[#ff5e00] tracking-[0.2em] uppercase">DESCRIPTION</span>
                </div>
              </div>
              <p className="text-lg md:text-xl leading-[1.8] text-slate-500 font-light max-w-3xl">
                {cert.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Certification() {
  return (
    <section id="certification" className="w-full max-w-[1920px] mx-auto py-24 md:py-32 px-8 md:px-16 bg-white border-x border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col pt-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-16 md:mb-24 gap-12 md:gap-0">
          <div className="flex flex-col items-start pl-0 lg:pl-0">
            <h2 className="text-[70px] md:text-[100px] lg:text-[130px] leading-none tracking-tighter text-black font-normal -ml-1 md:-ml-2">Certifications</h2>
            <div className="flex items-center gap-4 mt-[-10px] md:mt-[-30px]">
              <h2 className="text-[60px] md:text-[100px] lg:text-[130px] leading-none text-[#ff5e00] font-serif italic lowercase tracking-tight pl-2 md:pl-2">Gained</h2>
            </div>
          </div>
          <div className="md:pb-6">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase text-slate-400 whitespace-nowrap">RECOGNITION & IMPACT</span>
          </div>
        </div>

        {/* Cards Area */}
        <div className="flex flex-col w-full">
          {certificationsList.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
