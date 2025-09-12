import React, { useState } from "react";
import {
  LogIn,
  UserPlus,
  Menu,
  X,
  Link as LinkIcon,
  BarChart3,
  Zap,
  FileText,
  MicVocal,
  Newspaper,
  Library,
} from "lucide-react";
import logo from "../../public/main-logo.png"; // Adjust path
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {
      to: "/artist",
      label: "Artist Services",
      icon: MicVocal,
      textColor: "text-gray-300",
      hoverBg: "hover:bg-white/10",
      hoverText: "hover:text-white",
    },
    {
      to: "/cine-publishing",
      label: "Publishing",
      icon: Library,
      textColor: "text-gray-300",
      hoverBg: "hover:bg-white/10",
      hoverText: "hover:text-white",
    },
    {
      to: "/cine-ai",
      label: "CINE AI",
      icon: Zap ,
      textColor: "text-purple-300",
      hoverBg: "hover:bg-purple-500/30",
      hoverText: "hover:text-white",
    },
    {
      to: "/press",
      label: "Press Release",
      icon: Newspaper,
      textColor: "text-gray-300",
      hoverBg: "hover:bg-white/10",
      hoverText: "hover:text-white",
    },
    {
      to: "/contact",
      label: "Contact",
      icon: null,
      textColor: "text-gray-300",
      hoverBg: "hover:bg-white/10",
      hoverText: "hover:text-white",
    },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-slate-700/100 z-50">
      <header className="flex items-center justify-between py-4 px-6 md:px-8">
        {/* Left: Rotating Logo + Brand */}
        <div className="flex items-center gap-3">
          <div className="relative w-14 h-14 flex-shrink-0">
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <img
                src={logo}
                alt="Logo"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="w-full h-full rounded-full animate-spin-slow border-[3px] border-t-red-500 border-r-blue-500 border-b-transparent border-l-yellow-500"></div>
          </div>
          <Link to="/">
            <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              CINECMS
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 bg-slate-800/50 border border-slate-700 rounded-full p-1">
          {navItems.map((item, idx) => (
            <Link to={item.to} key={idx}>
              <button
                className={`inline-flex items-center justify-center whitespace-nowrap h-10 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                  ${item.textColor} ${item.hoverText} ${item.hoverBg}`}
              >
                {item.icon && (
                  <item.icon className="mr-2 h-4 w-4 flex-shrink-0" />
                )}
                {item.label}
              </button>
            </Link>
          ))}
        </nav>

        {/* Right: Buttons (Desktop) */}
         <div className="hidden md:flex items-center space-x-2">
      <a href="/login">
        <button
          className="justify-center whitespace-nowrap text-sm ring-offset-background 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
          focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
          bg-primary hover:bg-primary/90 h-10 px-4 py-2 font-semibold text-white 
          bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 animate-button-gradient 
          shadow-lg hover:shadow-xl transition-all transform hover:scale-105 
          group rounded-full flex items-center"
        >
          <LogIn className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-0" />
          Sign In
        </button>
      </a>
    </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
     <div
  className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
    menuOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-2"
  } origin-top`}
>

    <nav className="flex flex-col p-4 space-y-2">
      {navItems.map((item, idx) => (
        <Link
          to={item.to}
          key={idx}
          onClick={() => setMenuOpen(false)}
          className={`flex items-center px-4 py-2 rounded-lg font-medium transition ${item.textColor} ${item.hoverText} ${item.hoverBg}`}
        >
          {item.icon && (
            <item.icon className="mr-2 h-5 w-5 flex-shrink-0" />
          )}
          {item.label}
        </Link>
      ))}

      {/* Only Login button (removed Sign Up) */}
      <button
        onClick={() => {
          navigate("/login");
          setMenuOpen(false);
        }}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl hover:scale-105 transform transition duration-300 shadow-lg"
      >
        <LogIn size={18} />
        Login
      </button>
    </nav>
  </div>
      )}
    </div>
  );
};

export default Header;
