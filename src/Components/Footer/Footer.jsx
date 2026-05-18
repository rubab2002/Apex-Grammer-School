import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden selection:bg-blue-600 selection:text-white">
      {/* Subtle Background Radial Gradient for Premium Depth */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-16 relative z-10">
        
        {/* Column 1: Brand & Socials */}
        <div className="col-span-1">
          <h2 className="text-3xl font-black mb-6 tracking-tighter cursor-pointer group inline-block">
            <span className="text-white group-hover:text-blue-500 transition-colors duration-300">APEX</span>
            <span className="text-blue-500 group-hover:text-white transition-colors duration-300">GRAMMAR</span>
          </h2>
          <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6">
            Dedicated to delivering high-quality education that empowers every student to achieve their maximum potential.
          </p>
          {/* Social Icons with Smooth Transitions and Hover Rotation */}
          <div className="flex gap-4">
            {['FB', 'IG', 'TW', 'LI'].map(s => (
              <span 
                key={s} 
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xs font-black cursor-pointer
                           transition-all duration-500 transform hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110 hover:rotate-360 shadow-md shadow-black/20"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        
        {/* Column 2: Institutions with Right Slide Animation */}
        <div>
          <h4 className="text-sm font-black mb-6 uppercase tracking-[0.2em] text-blue-500">Institutions</h4>
          <ul className="space-y-4 text-slate-400 font-medium text-sm">
            {['Junior Branch', 'Boys High School', 'Girls College'].map((item, idx) => (
              <li 
                key={idx} 
                className="hover:text-white cursor-pointer transition-all duration-300 transform hover:translate-x-2 flex items-center gap-2 group"
              >
                <span className="h-1 w-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Interactive Contact Specs */}
        <div>
          <h4 className="text-sm font-black mb-6 uppercase tracking-[0.2em] text-blue-500">Contact Us</h4>
          <ul className="space-y-4 text-slate-400 font-medium text-sm">
            <li className="hover:text-white cursor-pointer transition-all duration-300 transform hover:translate-x-1 flex items-center gap-2">
              <span>📍</span> 123 Education Lane, Lahore
            </li>
            <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 transform hover:translate-x-1 flex items-center gap-2">
              <span>📞</span> +92 42 300 1234567
            </li>
            {/* Email Div with Distinct Cursor Pointer and Highlight Color */}
            <li className="hover:text-blue-400 cursor-pointer transition-all duration-300 transform hover:translate-x-1 flex items-center gap-2 font-semibold">
              <span>✉️</span> info@apexgrammar.edu.pk
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter Box with Upgraded Inputs & Animations */}
        <div>
          <h4 className="text-sm font-black mb-6 uppercase tracking-[0.2em] text-blue-500">Newsletter</h4>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed">Stay updated with our latest events and admissions.</p>
          
          {/* Glassmorphic input frame layout */}
          <div className="flex p-1.5 bg-white/3 border border-white/10 rounded-xl focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/30 transition-all duration-300 shadow-inner">
            {/* Upgraded Premium Input Field */}
            <input 
              type="text" 
              placeholder="Your Email" 
              className="bg-transparent border-none text-white focus:outline-none focus:ring-0 px-3 text-sm w-full font-medium placeholder-slate-500" 
            />
            {/* Upgraded GO Button with Gap, Lift & Shadow Animations */}
            <button className="ml-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-black text-xs uppercase tracking-wider cursor-pointer
                               transition-all duration-300 ease-out transform
                               shadow-md shadow-blue-500/10
                               hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30
                               active:scale-95"
            >
              GO
            </button>
          </div>
        </div>

      </div>

      {/* Copyright Footer Sub-bar */}
      <div className="relative z-10 text-center text-slate-600 text-[10px] font-black uppercase tracking-[0.4em] mt-12">
        © 2026 Apex Grammar School • Pakistan
      </div>
    </footer>
  );
};

export default Footer;