import React from 'react';

const Academics = () => {
  return (
    // FIX 1: pt-32 lagaya taake content safe rahay aur pure white Navbar se perfect space banaye
    <div className="pt-32 bg-slate-50/60 min-h-screen text-slate-800 overflow-hidden selection:bg-blue-600 selection:text-white">
      
      {/* 1. Light Premium Hero Section with Subtle Luxury Design Grid */}
      <div className="relative border-b border-gray-100 bg-white py-24 text-center overflow-hidden">
        {/* Soft Sophisticated Grid Pattern for High-End Aesthetic */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-blue-600 font-black tracking-[0.5em] uppercase text-xs mb-4 block animate-pulse">
            Educational Paradigm
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-r from-slate-900 via-slate-800 to-slate-600">
            Academic Excellence
          </h1>
          <div className="h-1.5 w-24 bg-linear-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6 shadow-lg shadow-blue-500/20"></div>
          <p className="text-blue-600 font-black uppercase tracking-widest text-xs md:text-sm max-w-xl mx-auto bg-blue-50 border border-blue-100 py-2.5 px-5 rounded-full shadow-sm">
            Nurturing Minds from Preschool to Graduation
          </p>
        </div>
      </div>

      {/* 2. Section 1: Our Philosophy (Light Luxury Interactive Suite) */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          {/* Animated Philosophy Text Block with Soft Depth */}
          <div className="bg-white border-l-8 border-blue-600 p-10 rounded-[2.5rem] border shadow-xl shadow-slate-200/50 cursor-pointer
                          transition-all duration-500 ease-out transform
                          hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 hover:translate-x-1.5"
          >
            <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight">Beyond the Books</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium italic">
              "At Apex Grammar, we do not believe in rote learning. Our mission is to ignite critical thinking and spark creativity in every student..."
            </p>
          </div>

          {/* Interactive Feature List Specs */}
          <ul className="space-y-4">
            {["Holistic Development", "Inquiry-Based Learning", "Character Building", "Digital Literacy"].map(item => (
              <li 
                key={item} 
                className="flex items-center gap-4 font-black text-slate-700 text-base cursor-pointer group 
                           transition-all duration-300 hover:text-blue-600 hover:translate-x-2"
              >
                <span className="w-8 h-8 bg-white border border-gray-200 text-blue-600 rounded-xl flex items-center justify-center text-xs font-black
                                 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:rotate-12 transition-all duration-300 shadow-md shadow-slate-200/60">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Immersive Image Frame Framework */}
        <div className="group bg-white border border-gray-100 rounded-[3.5rem] h-112 overflow-hidden shadow-2xl relative cursor-pointer">
          <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-cyan-500 rounded-[3.5rem] opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-sm pointer-events-none"></div>
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800" 
            className="w-full h-full object-cover group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 ease-out" 
            alt="Classroom" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* 3. Section 3: Facilities (Light Luxury Grid Layout) */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[130px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-blue-600 font-black tracking-widest text-xs uppercase block mb-2">Campus Infrastructure</span>
          <h2 className="text-4xl font-black text-slate-800 tracking-tight mb-4">World Class Facilities</h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full mb-20"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Science Labs", desc: "Fully equipped modern labs", icon: "🔬" },
              { title: "Digital Library", desc: "10,000+ Books & E-resources", icon: "📖" },
              { title: "Sports Complex", desc: "Indoor & Outdoor arenas", icon: "⚽" },
              { title: "IT Suites", desc: "Latest computing technology", icon: "💻" }
            ].map((f, i) => (
              <div 
                key={i} 
                className="group bg-slate-50/50 p-8 rounded-[2.5rem] border border-gray-100 shadow-md shadow-slate-100 cursor-pointer
                           transition-all duration-500 ease-out transform
                           hover:bg-white hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
              >
                {/* Floating Icon Box Animation */}
                <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-sm
                                group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-600/30 transition-all duration-300">
                  {f.icon}
                </div>
                <h4 className="font-black text-slate-800 text-xl mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {f.title}
                </h4>
                <p className="text-slate-500 text-sm font-semibold leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Academics;