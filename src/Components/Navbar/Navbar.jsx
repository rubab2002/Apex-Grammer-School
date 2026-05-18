import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Academics", path: "/academics" },
    { name: "Faculty", path: "/faculty" },
    { name: "Campus", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 backdrop-blur-md ${
        isScrolled
          ? "bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.05)] py-3 border-b border-white/20"
          : "bg-white/10 py-5 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-blue-600/20 group-hover:rotate-6 transition-transform">
            A
          </div>
          <div className="text-2xl font-black tracking-tighter">
            <span className={isScrolled ? "text-slate-800" : "text-white"}>
              APEX{" "}
            </span>
            <span className="text-blue-500">GRAMMAR</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-bold text-xs uppercase tracking-widest transition-all relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all cursor-pointer ${
                isScrolled
                  ? "text-slate-700 hover:text-blue-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* APPLY NOW Button */}
          <Link to="/apply">
            <button
              className="bg-blue-600 text-white px-7 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase cursor-pointer
                               transition transform duration-300
                               hover:bg-blue-700 hover:scale-105 active:scale-95
                               shadow-lg shadow-blue-500/20"
            >
              APPLY NOW
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
