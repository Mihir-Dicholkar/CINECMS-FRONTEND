import React from "react";
import logo from "../../public/mainlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignIn,
  faEnvelope,
  faLock,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <>
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-slate-950 p-4">
        <div className="rounded-xl border text-card-foreground w-full max-w-sm bg-slate-900/60 border-slate-700/50 shadow-2xl shadow-black/30 backdrop-blur-xl p-5">
          {/* Rotating Logo */}
          <div className="relative justify-center mx-auto my-5 w-24 h-24 flex-shrink-0">
            <div className="absolute inset-0 z-0 rounded-full bg-slate-600/40 backdrop-blur-md border border-white/20 shadow-md" />
            <div className="absolute inset-0 z-10 flex  items-center justify-center">
              <img
                src={logo}
                alt="Logo"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="w-full h-full rounded-full animate-spin-slow border-[2px] border-t-red-500 border-r-yellow-400 border-l-blue-500 z-20" />
          </div>

          {/* Heading */}
          <h3 className="text-3xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            CINECMS Login
          </h3>

          {/* Subheading Paragraph */}
          <p className="text-sm text-center text-gray-400">
            Access your music distribution dashboard.
          </p>

          {/* Form */}
          <form className="w-full grid grid-cols-2 gap-4 text-left text-sm mt-6">
            {/* Email (Full width) */}
            <div className="flex flex-col col-span-2">
              <label className="text-gray-300 mb-1 flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 h-4 w-4 text-purple-400"
                />{" "}
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="bg-slate-800/60 border border-slate-600 text-white px-3 py-2 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col col-span-2">
              <label className="text-gray-300 mb-1 flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faLock}
                  className="mr-2 h-4 w-4 text-purple-400"
                />{" "}
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="bg-slate-800/60 border border-slate-600 text-white px-3 py-2 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </form>

          {/* Submit Button with logo */}
          <button className="inline-flex items-center justify-center rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold text-lg py-6 mt-4">
            <FontAwesomeIcon
              icon={faSignIn}
              className="mr-2 h-4 w-4 text-white"
            />
            Sign-In
          </button>

          {/* Footer Links */}
          <div className="mt-4 text-sm text-gray-400 space-x-4">
            <p className="mt-6 text-center text-sm text-gray-400">
              {" "}
   Forgot Password ?  
              <a
                href="#"
                className="font-medium not-visited:tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              >
                 Reset-Password
              </a>
            </p>
            <p className="mt-2 text-center text-sm text-gray-400">
              {" "}
              Dont an account?
              <a
                href="/register"
                className="font-medium not-visited:tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              >
                Sign-Up
              </a>
            </p>
            <p className="mt-2 text-center text-sm text-gray-400">
              {" "}
              Back to
              <a
                href="/"
                className="font-medium tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
              >
                CINECMS
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
