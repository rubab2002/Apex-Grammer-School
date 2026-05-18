import React from 'react';
import campusimage from "../../assets/campusimage.jpeg"

const CampusLife = () => {
  const safetyProtocols = [
    { title: "24/7 Security", desc: "Pure campus mein advanced CCTV coverage aur trained security guards maujood hain.", icon: "🛡️" },
    { title: "Smart IT Infrastructure", desc: "High-speed optical fiber internet aur har classroom mein smart interactive boards.", icon: "💻" },
    { title: "Health & Wellness", desc: "Campus mein makhsoos medical room aur har waqt aik emergency nurse maujood hoti hai.", icon: "🏥" }
  ];

  const events = [
    { title: "Annual Sports Fest", date: "Every November", desc: "Cricket, Football aur Athletics ke baray muqablay." },
    { title: "Science & Tech Expo", date: "Every March", desc: "Bachon ke banaye hue innovative models ki numaish." },
    { title: "Cultural Art Day", date: "Every May", desc: "Art, Music aur Theater ke zariye bacho ki creativity ka izhaar." }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* 1. Hero Section: The Grand Entrance */}
      <div className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img 
          src={campusimage}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.25] scale-105 transition-transform duration-2000 hover:scale-100" 
          alt="Campus" 
        />
        <div className="relative z-10 text-center px-2 max-w-5xl">
          <span className="text-blue-500 font-black tracking-[0.6em] uppercase text-xs mb-6 block animate-pulse">Your Journey Starts Here</span>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-tight tracking-tighter">
            More Than Just <br/> <span className="text-blue-500 italic">Education </span>
          </h1>
          <p className="text-slate-200 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            The Apex Grammar campus is a world where learning, play, and growth coexist in harmony. Every corner has been meticulously designed to nurture the intellectual and physical development of our students.
          </p>
        </div>
      </div>

      {/* 2. Welcome & Philosophy (Expanded Material) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 text-slate-800/10 rounded-[3rem] group-hover:bg-blue-600/20 transition-all"></div>
            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800" className="relative z-10 rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Student Life" />
          </div>
          
          <div>
            <h4 className="text-blue-600 font-black uppercase text-sm tracking-widest mb-4 italic">Our Core Philosophy</h4>
            <h2 className="text-5xl font-black text-slate-800 mb-8 leading-tight">A Culture of <span className="text-blue-600">Curiosity.</span></h2>
            <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
              <p>
                We do not believe in just awarding degrees. The environment at Apex Grammar encourages children to question everything and discover new paths. Our campus is a 'Living Lab' where every child is free to express their thoughts and opinions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="space-y-6">
  {/* 1. Safe & Secure Card */}
  <div className="bg-white p-7 rounded-2xl border-l-8 border-blue-600 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(30,64,175,0.08)] cursor-pointer transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] flex flex-row justify-center">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xl">🛡️</span>
      <h4 className="font-extrabold text-slate-900 tracking-tight text-xl">
        Safe & Secure
      </h4>
    </div>
    <p className="text-sm text-slate-600 font-medium leading-relaxed pl-8">
      Child safety: Our primary focus and fundamental duty.
    </p>
  </div>

  {/* 2. Eco-Friendly Card */}
  <div className="bg-white p-7 rounded-2xl border-l-8 border-emerald-600 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(5,150,105,0.08)] cursor-pointer transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] flex flex-col justify-center">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xl">☀️</span>
      <h4 className="font-extrabold text-slate-900 tracking-tight text-xl">
        Eco-Friendly Campus
      </h4>
    </div>
    <p className="text-sm text-slate-600 font-medium leading-relaxed pl-8">
      A clean and sustainable environment, powered by solar energy and enriched with green spaces.
    </p>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Safety & Digital Infrastructure Bar (New Material) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-white to-blue-500 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Security & Technology</h2>
            <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">State-of-the-Art Protection</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {safetyProtocols.map((p, i) => (
              <div key={i} className="p-10 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-5xl mb-6">{p.icon}</div>
                <h3 className="text-2xl font-black mb-4 text-blue-400">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Events Calendar Section (Zabardast Data Increase) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
             <h2 className="text-4xl font-black text-slate-800 mb-6 leading-tight">Campus <br/> <span className="text-blue-600 italic">Timeline.</span></h2>
             <p className="text-slate-500 font-medium text-lg leading-relaxed">
              At Apex Grammar, a continuous lineup of events and activities takes place throughout the year to ensure that learning never becomes boring..
             </p>
          </div>
          <div className="lg:col-span-2 space-y-6">
            {events.map((e, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-6 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className="bg-blue-600 text-white font-black px-6 py-2 rounded-full text-sm uppercase tracking-tighter whitespace-nowrap">{e.date}</div>
                <div>
                   <h4 className="text-2xl font-black text-slate-800 mb-1">{e.title}</h4>
                   <p className="text-slate-500 font-medium">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section (Conclusion) */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
           <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-8">🏫</div>
           <h2 className="text-4xl font-black text-slate-800 mb-6 underline decoration-blue-600 underline-offset-8">Visit Us Today</h2>
           <p className="text-xl text-slate-500 font-medium mb-10 leading-relaxed">
             To truly experience the vibrant energy of our campus, schedule a visit today. We look forward to giving you a complete guided tour and showing you our state-of-the-art facilities firsthand.
           </p>
           <button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-600 transition-all shadow-2xl shadow-blue-900/10">BOOK A CAMPUS TOUR</button>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;