import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {    faShareNodes } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <div className="overflow-x-hidden">
      <footer className="bg-black/50 border-t border-slate-800 backdrop-blur-lg relative z-10 pt-16 pb-8">
     <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Logo + About */}
        <div className="lg:col-span-3">
          <a className="flex items-center space-x-2 mb-4" href="/">
            <div className="relative   flex items-center justify-center h-10 w-10">
              <div
              
            className="absolute w-full h-full border-2 border-t-purple-400 border-r-pink-500 border-b-red-500 border-l-transparent rounded-full animate-spin"
  style={{ animationDuration: "3s" }}
              ></div>
              <img
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/8f5cf60f-f1cb-451f-8996-7971468e9644/30cd948f86361ce57a6f07f96ceef7ef.png"
                alt="CINECMS Logo"
                className="relative h-8 w-8"
              />
            </div>
            <span className="text-xl font-bold text-white">CINECMS</span>
          </a>
          <p className="text-gray-400 text-sm max-w-xs">
            Empowering independent artists with cutting-edge tools for global
            music distribution.
          </p>
        </div>

        {/* Product Links */}
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
                href="/artist-services"
              >
                Artist Services
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out text-sm"
                href="/cine-publishing"
              >
                Publishing
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

        {/* Company Links */}
        <div className="lg:col-span-2">
          <p className="font-semibold text-white mb-4">Company</p>
          <ul className="space-y-3">
            <li>
              <a
                className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out text-sm"
                href="/press-release"
              >
                Press
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
                href="/#whitelabel"
              >
                Whitelabel
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
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
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-3">
          <p className="font-semibold text-white mb-4">Stay Updated</p>
          <p className="text-gray-400 text-sm mb-4">
            Join our newsletter for the latest updates and tips.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background 
              file:border-0 file:bg-transparent file:text-sm file:font-medium 
              placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
              disabled:cursor-not-allowed disabled:opacity-50 
              bg-slate-800/50 border-slate-700 focus:ring-pink-500 text-white"
              placeholder="Your Email"
            />
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium 
              ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
              focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
              text-primary-foreground h-10 w-10 bg-pink-600 hover:bg-pink-700 flex-shrink-0"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500 text-center sm:text-left">
          © 2025 CINECMS. All Rights Reserved.
        </p>
        <div
          className="flex items-center gap-4 bg-slate-800/50 hover: px-4 py-2 rounded-lg border border-slate-700 cursor-pointer"
          role="button"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            alt="Spotify Logo"
            className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="w-px h-6 bg-slate-600"></div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg"
            alt="Meta Logo"
            className="h-5 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-sm text-gray-300 font-semibold ml-2">
            Preferred Partners
          </span>
        </div>
      </div>
    </div>

      </footer>
    </div>
  );
}

export default Footer;
