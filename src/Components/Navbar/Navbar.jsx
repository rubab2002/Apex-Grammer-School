import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Academics', path: '/academics' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Campus', path: '/gallery' },
    { name: 'Contact', path: '/contact' }, // App.jsx ke mutabiq bilkul sahi hai
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">A</div>
          <div className="text-2xl font-black tracking-tighter">
            <span className={isScrolled ? "text-slate-800" : "text-white"}>APEX </span>
            <span className="text-blue-500">GRAMMAR</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`font-bold text-sm uppercase tracking-widest transition-colors cursor-pointer ${
                isScrolled ? "text-slate-600 hover:text-blue-600" : "text-white/90 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* FIX: APPLY NOW Button ko Link tag ke andar wrap kar diya hai */}
          <Link to="/apply">
            <button className="bg-blue-600 text-white px-7 py-2.5 rounded-full font-bold text-sm cursor-pointer
                               transition transform duration-300
                               hover:bg-blue-700 hover:scale-105 active:scale-95
                               shadow-lg shadow-blue-500/30">
              APPLY NOW
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;