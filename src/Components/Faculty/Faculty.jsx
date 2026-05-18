import React from 'react';

const Faculty = () => {
  // Ultra-Premium Mentors Data with Handpicked Professional Headshots
  const departments = [
    {
      title: "Science Department",
      tagline: "Unlocking empirical knowledge & critical thinking",
      teachers: [
        { name: "Dr. Arsalan Khan", role: "Head of Chemistry", exp: "12+ Years Exp.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" },
        { name: "Prof. Ayesha Umar", role: "Senior Biology Specialist", exp: "9+ Years Exp.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" }
      ]
    },
    {
      title: "Mathematics & Quantum IT",
      tagline: "Architecting logical frameworks and digital innovation",
      teachers: [
        { name: "Mr. Salman Malik", role: "Advanced Calculus & Algebra", exp: "15+ Years Exp.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" },
        { name: "Miss Zainab Raza", role: "AI & Computer Sciences", exp: "7+ Years Exp.", img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop" }
      ]
    },
    {
      title: "Languages & Global Culture",
      tagline: "Fostering global communication & historical insights",
      teachers: [
        { name: "Mrs. Nida Hassan", role: "English Literature Expert", exp: "10+ Years Exp.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
        // FIXED: Mr. Bilal Ahmed's Image upgraded to a premium corporate educator portrait
        { name: "Mr. Bilal Ahmed", role: "History & Global Studies", exp: "8+ Years Exp.", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop" }
      ]
    }
  ];

  return (
    // Space adjustment to keep it perfectly layout-locked under Navbar
    <div className="pt-32 bg-slate-900 min-h-screen text-white overflow-hidden selection:bg-blue-600 selection:text-white">
      
      {/* 1. Ultra-Premium Header Space (Immersive Dark Grid Effect) */}
      <div className="relative border-b border-white/5 bg-linear-to-b from-slate-950 via-slate-900 to-slate-900 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-blue-500 font-black tracking-[0.5em] uppercase text-xs mb-4 block animate-pulse">
            Elite Academic Core
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-r from-white via-slate-200 to-slate-400">
            Our Faculty & Mentors
          </h1>
          <div className="h-1.5 w-24 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-6 shadow-lg shadow-blue-500/50"></div>
          <p className="text-slate-400 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A collective network of visionary scholars, master educators, and global thinkers committed to academic brilliance.
          </p>
        </div>
      </div>

      {/* 2. Main Premium Grid Layout */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        {departments.map((dept, idx) => (
          <div key={idx} className="mb-24 last:mb-0">
            
            {/* Elegant Department Bar */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12 border-b border-white/5 pb-4">
              <div>
                <h2 className="text-3xl font-black tracking-tight bg-linear-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  {dept.title}
                </h2>
                <p className="text-blue-400/80 font-semibold text-sm italic mt-1">{dept.tagline}</p>
              </div>
              <div className="hidden md:block grow h-px bg-linear-to-r from-blue-500/30 to-transparent ml-4"></div>
            </div>

            {/* Interactive Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {dept.teachers.map((teacher, tIdx) => (
                <div 
                  key={tIdx} 
                  className="group bg-white/2 backdrop-blur-md rounded-[2.5rem] p-6 flex flex-col sm:flex-row gap-6 items-center border border-white/5 shadow-xl cursor-pointer
                             transition-all duration-500 ease-out transform
                             hover:bg-white/4 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
                >
                  {/* Portrait Framework */}
                  <div className="w-36 h-36 rounded-2xl overflow-hidden bg-slate-800 shrink-0 relative border border-white/10 shadow-inner group-hover:border-blue-500/30 transition-colors duration-500">
                    <img 
                      src={teacher.img} 
                      alt={teacher.name} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1" 
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Faculty Content Specs */}
                  <div className="text-center sm:text-left grow">
                    <span className="inline-block px-3 py-1 border border-blue-500/20 bg-blue-500/10 text-blue-400 font-black text-[10px] uppercase tracking-widest rounded-full mb-3 shadow-sm">
                      {teacher.exp}
                    </span>
                    <h3 className="text-2xl font-black text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {teacher.name}
                    </h3>
                    <p className="text-slate-400 font-semibold text-sm tracking-wide mb-5">{teacher.role}</p>
                    
                    {/* Interactive Action Hub (Upgrade Detail) */}
                    <div className="flex justify-center sm:justify-start gap-4 border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-500 hover:text-blue-400 transition-colors group/link">
                        <span className="w-8 h-8 bg-white/5 rounded-xl flex items-center justify-center font-bold border border-white/5 group-hover/link:bg-blue-600 group-hover/link:text-white group-hover/link:border-blue-600 transition-all duration-300">✉</span>
                        <span>Official Email</span>
                      </div>
                      <div className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-500 hover:text-cyan-400 transition-colors group/link">
                        <span className="w-8 h-8 bg-white/5 rounded-xl flex items-center justify-center font-bold border border-white/5 group-hover/link:bg-cyan-500 group-hover/link:text-slate-900 group-hover/link:border-cyan-500 transition-all duration-300">📇</span>
                        <span>Portfolio</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 3. Executive Leadership Suite (Highly Animated & Fully Interactive Bottom Section) */}
      <section className="py-28 bg-linear-to-b from-slate-900 to-slate-950 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-black tracking-widest text-xs uppercase block mb-2">Apex Directorate</span>
            <h2 className="text-4xl font-black text-white tracking-tight">Institutional Message</h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Fully Interactive Principal Suite Block */}
          <div className="group/exec relative bg-white/1 backdrop-blur-xl p-10 md:p-14 rounded-[3.5rem] border border-white/5 shadow-2xl flex flex-col md:flex-row gap-12 items-center cursor-pointer
                         transition-all duration-500 ease-out transform
                         hover:bg-white/3 hover:border-blue-500/30 hover:shadow-blue-500/5 hover:-translate-y-2"
          >
            {/* Glowing background halo on hover */}
            <div className="absolute -inset-px bg-linear-to-r from-blue-500 to-cyan-500 rounded-[3.5rem] opacity-0 group-hover/exec:opacity-10 transition-opacity duration-700 blur-sm pointer-events-none"></div>

            {/* Principal Luxury Framework */}
            <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 border-4 border-white/10 shadow-2xl relative transition-all duration-500 group-hover/exec:border-blue-500 group-hover/exec:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/exec:scale-110" 
                alt="Principal Dr. Sarah Ahmed" 
              />
            </div>

            {/* Content Details Grid */}
            <div className="relative z-10 text-center md:text-left grow">
              <span className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] block mb-2 group-hover/exec:text-cyan-400 transition-colors duration-300">
                Principal's Perspective
              </span>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight group-hover/exec:translate-x-1 transition-transform duration-500">
                Dr. Sarah Ahmed <span className="text-sm text-slate-500 font-bold block md:inline md:ml-2">(Ph.D. Academic Management)</span>
              </h3>
              <p className="text-slate-300 leading-relaxed font-medium text-base italic relative pl-0 md:pl-4 md:border-l-2 border-white/5 group-hover/exec:border-blue-500/50 transition-colors duration-500">
                "I warmly welcome you to Apex Grammar. Our staff is not merely a group of professionals, but a team of dedicated mentors striving to unlock the hidden potential within every child. With hard work and passion, we prepare our students to excel in the challenges of the future."
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Faculty;