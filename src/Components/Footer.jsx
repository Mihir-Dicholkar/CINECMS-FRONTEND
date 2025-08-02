import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {    faShareNodes } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <div className="">
      <footer className="bg-slate-900/80 border-t border-slate-700/50 backdrop-blur-sm px-7 relative z-10 pt-16 pb-8">
        <div className="container flex flex-row justify-around px-4 md:px-8 mb-8">
          <div className="lg:col-span-3">
            <a href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-14 h-14 flex-shrink-0">
                {/* Fixed image inside */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <img
                    src="/public/main-logo.png"
                    alt="Logo"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>

                {/* Rotating border ring */}
                <div className="w-full h-full rounded-full animate-spin-slow border-[3px] border-t-red-500 border-r-blue-500 border-b-transparent border-l-yellow-500"></div>
              </div>{" "}
              <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                CINECMS
              </span>
            </a>
            <p className="text-gray-400 text-sm max-w-xs">
              Empowering independent artists with cutting-edge tools for global
              music distribution.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="font-semibold text-white mb-4">Product</p>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out text-sm"
                  href="/#features"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out text-sm"
                  href="/#pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out text-sm"
                  href="/#how-it-works"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out text-sm"
                  href="/login"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-semibold text-white mb-4">Company</p>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out text-sm"
                  href="/about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out text-sm"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out text-sm"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out text-sm"
                  href="/careers"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-semibold text-white mb-4">Legal</p>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out text-sm"
                  href="/privacy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out text-sm"
                  href="/terms"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out text-sm"
                  href="/cookie-policy"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        <div className="lg:col-span-3">
          <p className="font-semibold text-white mb-4">Stay Updated</p>
          <p className="text-gray-400 text-sm mb-4">Join our newsletter for the latest updates and tips.</p>
          <form action="" className="flex space-x-2">
            <input type="email" className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-slate-800/50 border-slate-700 focus:ring-pink-500" placeholder="Your Email"></input>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 w-10 bg-pink-600 hover:bg-pink-700 flex-shrink-0" type="submit">
              <FontAwesomeIcon icon={faShareNodes} className="text-white"/>
            </button>
          </form>
        </div> 
        </div>
       <div className=" border-t-2 px-12 mx-10  border-slate-700/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
       <p className="text-sm text-gray-100 text-center sm:text-left">© 2025 CINECMS. All Rights Reserved.</p>
       <div className="flex items-center gap-3 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
       <img src="/public/Spotify_Logo_RGB_Green.png" alt="" className="h-6" />
       <span className="text-sm text-gray-300 font-semibold">Preferred Partner</span></div>
       </div>
      </footer>
    </div>
  );
}

export default Footer;
