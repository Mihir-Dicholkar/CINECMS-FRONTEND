import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {    faSignIn, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../../public/main-logo.png'; // Adjust the path to your logo image
import { faBookOpen, faBoltLightning, faMicrophone, faNewspaper,} from "@fortawesome/free-solid-svg-icons";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Header = () => {
const navItems = [
  { label: "Artist Services", to: "/artist", icon: faMicrophone }, // scrolls to #features
  { label: "Publishings", to: "/", icon: faBookOpen }, // navigates to /publishings
  { label: "Cine-AI", to: "/cine-ai", icon: faBoltLightning }, // navigates to /cine-ai
  { label: "Press Releases", to: "/press", icon: faNewspaper}, // scrolls to #pricing
  { label: "Contact", to: "/contact" }, // scrolls to #contact
];
const navigate = useNavigate();
  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-slate-700/100 z-50">
      <header className="md:flex items-center justify-between py-4 px-8">
        
        {/* Left: Rotating Logo */}
  <div className="flex items-center gap-3">
  {/* Rotating logo with fixed image inside */}
  <div className="relative w-14 h-14 flex-shrink-0">
    {/* Fixed image inside */}
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <img src={logo} alt="Logo" className="w-12 h-12 rounded-full object-cover" />
    </div>

    {/* Rotating border ring */}
    <div className="w-full h-full rounded-full animate-spin-slow border-[3px] border-t-red-500 border-r-blue-500 border-b-transparent border-l-yellow-500"></div>
  </div>

  {/* Gradient Brand Text */}
  <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
    CINECMS
  </span>
</div>


        {/* Center: Navigation Links */}
<ul className="flex flex-wrap gap-6 justify-center mt-4 md:mt-0">
  {navItems.map((item, idx) => {
    const LinkComponent = item.hash ? HashLink : Link;
    const to = item.hash ? `#${item.hash}` : item.to;

    return (
      <li key={idx}>
        <LinkComponent
          smooth
          to={to}
          className="relative px-3 py-1 text-gray-100 font-medium cursor-pointer group transition-all duration-300
                     before:content-[''] before:absolute before:inset-0 before:scale-x-0 before:bg-blue-900 before:rounded before:z-0 before:transition-transform before:duration-300
                     group-hover:before:scale-x-100"
        >
          <span className="relative z-10 flex items-center gap-1">
            {item.icon && <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />}
            {item.label}
          </span>
        </LinkComponent>
      </li>
    );
  })}
</ul>



        {/* Right: Login & Signup Buttons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <button    onClick={() => navigate("/login")}  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl hover:scale-105 transform transition duration-300 shadow-lg">
            <FontAwesomeIcon icon={faSignIn} />
            Login
          </button>
          <button     onClick={() => navigate("/register")}  className="flex items-center gap-2 px-4 py-2 border-2 border-indigo-500 text-indigo-500 rounded-2xl hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-md hover:scale-105">
            <FontAwesomeIcon icon={faUserPlus} />
            Sign Up
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
