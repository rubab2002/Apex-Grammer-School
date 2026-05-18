import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523050853063-bd8012fbb230?q=80&w=1920" 
          className="w-full h-full object-cover opacity-30 scale-110" 
          alt="School Campus" 
        />
        <div className="absolute inset-0 bg-linear-to-b from-blue-900/60 via-slate-900/40 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 border border-blue-400/30 bg-blue-500/10 backdrop-blur-md rounded-full text-blue-400 font-bold text-xs uppercase tracking-[0.2em]">
          Admissions Open 2026-27
        </span>
        <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8">
          Nurturing <span className="text-blue-500 text-outline">Excellence</span> <br/>
          Building Leaders.
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Providing a world-class educational environment where creativity meets discipline to shape the global citizens of tomorrow.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  
  {/* 1. GET STARTED BUTTON (Primary - Glow & Lift Effect) */}
  <button className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-xl font-black cursor-pointer
                     transition-all duration-300 ease-out transform
                     shadow-xl shadow-blue-600/30
                     
                     /* Hover Effects */
                     hover:bg-blue-500 hover:-translate-y-1 
                     hover:shadow-2xl hover:shadow-blue-500/50
                     
                     /* Active/Click Effect */
                     active:scale-95">
    GET STARTED
  </button>

  {/* 2. VIRTUAL TOUR BUTTON (Secondary - Glassmorphism & Border Glow) */}
  <button className="w-full sm:w-auto bg-white/5 text-white border border-white/20 px-10 py-4 rounded-xl font-black cursor-pointer
                     backdrop-blur-md transition-all duration-300 ease-out transform
                     shadow-lg shadow-black/10
                     
                     /* Hover Effects */
                     hover:bg-white hover:text-slate-900 hover:-translate-y-1
                     hover:border-white hover:shadow-2xl hover:shadow-white/20
                     
                     /* Active/Click Effect */
                     active:scale-95">
    VIRTUAL TOUR
  </button>

</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;