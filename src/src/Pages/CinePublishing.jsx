import React, { useEffect } from "react";
import Header from "../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroadcastTower,
  faCompactDisc,
  faTv,
  faSatelliteDish,
  faGlobe,
  faUniversity
} from '@fortawesome/free-solid-svg-icons';
import {
  MicOff,
  ChartNoAxesColumnIncreasing,
  TvMinimal,
  Satellite,
  Globe,
  Building2,
  University,
  Radio,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
function CinePublishing() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  return (
    <>
  <div className="bg-slate-900 text-white min-h-screen">
    <Header/>
    <main className="pt-24 md:pt-32">
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900/80 z-0"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        <div className="container mx-auto px-4 relative z-10">
  <h1
    className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
    style={{ opacity: 1, transform: "none" }}
  >
    Local Beats to Global Streets
  </h1>
  <p
    className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8"
    style={{ opacity: 1, transform: "none" }}
  >
    We collect it all with our AI-powered CINECMS Publishing Society Admin Tools.
    CINECMS Music Publishing ensures you get paid for every use of your music, everywhere. We handle the complex world of royalty collection so you can focus on creating.
  </p>
  <div style={{ opacity: 1, transform: "none" }}>
    <a href="/login">
      <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg py-4 px-8 rounded-full shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all transform hover:scale-105 group">
        Start Collecting Royalties
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
          className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </a>
  </div>
</div>

      </section>
      <section className="py-16 md:py-24 bg-slate-900/70">
      <div className="container mx-auto px-4">
  <div className="text-center mb-12" style={{ opacity: 1, transform: "none" }}>
    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
      <span className="text-4xl md:text-6xl mr-2">🎵</span>
      Publishing Society Admin –{" "}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-400 to-sky-500">
        Powered by CINECMS
      </span>
    </h2>
    <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg">
      At CINECMS, we don’t just distribute your music — we protect it, manage it, and make it work harder for you. As your dedicated Publishing Society Admin, we ensure that your songs are not only heard but also legally secured and fairly monetized across the globe.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-10 items-center">
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white">
        Why choose CINECMS as your Publishing Society Admin?
      </h3>

      <div className="flex items-start space-x-4" style={{ opacity: 1, transform: "none" }}>
        <div className="flex-shrink-0 p-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
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
            className="h-6 w-6 text-cyan-400"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </div>
        <p className="text-gray-300">
          End-to-End Copyright Protection: We register and safeguard your music with leading copyright societies, so your creations are always protected.
        </p>
      </div>

      <div className="flex items-start space-x-4" style={{ opacity: 1, transform: "none" }}>
        <div className="flex-shrink-0 p-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
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
            className="h-6 w-6 text-cyan-400"
          >
            <line x1="12" x2="12" y1="20" y2="10"></line>
            <line x1="18" x2="18" y1="20" y2="4"></line>
            <line x1="6" x2="6" y1="20" y2="16"></line>
          </svg>
        </div>
        <p className="text-gray-300">
          Transparent Royalty Management: Every stream, every play, every sync — we track it all. With our AI-powered royalty dashboard, artists see exactly where their earnings come from, with no hidden cuts.
        </p>
      </div>

      <div className="flex items-start space-x-4" style={{ opacity: 1, transform: "none" }}>
        <div className="flex-shrink-0 p-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
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
            className="h-6 w-6 text-cyan-400"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
        </div>
        <p className="text-gray-300">
          Global Publishing Reach: From India to international platforms, CINECMS ensures your music royalties are collected worldwide through trusted society networks.
        </p>
      </div>

      <div className="flex items-start space-x-4" style={{ opacity: 1, transform: "none" }}>
        <div className="flex-shrink-0 p-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
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
            className="h-6 w-6 text-cyan-400"
          >
            <path d="M12 8V4H8"></path>
            <rect width="16" height="12" x="4" y="8" rx="2"></rect>
            <path d="M2 14h2"></path>
            <path d="M20 14h2"></path>
            <path d="M15 13v2"></path>
            <path d="M9 13v2"></path>
          </svg>
        </div>
        <p className="text-gray-300">
          AI-Powered Monitoring: Our smart detection tools scan digital platforms for unauthorized use of your songs, ensuring you never miss a single rupee of revenue.
        </p>
      </div>

      <div className="flex items-start space-x-4" style={{ opacity: 1, transform: "none" }}>
        <div className="flex-shrink-0 p-2 bg-cyan-500/10 rounded-full border border-cyan-500/20">
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
            className="h-6 w-6 text-cyan-400"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <p className="text-gray-300">
          Unified Artist Account: No more scattered reports. We consolidate all your publishing income into one transparent account, so you can focus on what you do best — making music.
        </p>
      </div>
    </div>

    <div
      className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 shadow-2xl shadow-cyan-900/20"
      style={{ opacity: 1, transform: "none" }}
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
        className="h-12 w-12 text-cyan-300 mb-4"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" x2="8" y1="13" y2="13"></line>
        <line x1="16" x2="8" y1="17" y2="17"></line>
        <line x1="10" x2="8" y1="9" y2="9"></line>
      </svg>

      <h3 className="text-2xl font-bold text-white mb-4">CINECMS as your Publishing Society Admin</h3>
      <div className="space-y-3">
        <div className="flex items-center">
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
            className="h-5 w-5 text-green-400 mr-3 flex-shrink-0"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <path d="m9 11 3 3L22 4"></path>
          </svg>
          <span className="text-gray-200 text-lg">Your music is secure</span>
        </div>

        <div className="flex items-center">
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
            className="h-5 w-5 text-green-400 mr-3 flex-shrink-0"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <path d="m9 11 3 3L22 4"></path>
          </svg>
          <span className="text-gray-200 text-lg">Your royalties are maximized</span>
        </div>

        <div className="flex items-center">
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
            className="h-5 w-5 text-green-400 mr-3 flex-shrink-0"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <path d="m9 11 3 3L22 4"></path>
          </svg>
          <span className="text-gray-200 text-lg">Your career is future-ready</span>
        </div>
      </div>

      <hr className="my-6 border-slate-700" />

      <p className="text-xl font-semibold text-center text-cyan-300">
        CINECMS – Where Artists Create,We Manage the Rest.
      </p>
    </div>
  </div>
</div>

      </section>
      <section className="py-16 md:py-24 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <div>
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold">Your All-in-One Publishing Administrator</h2>
    <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
      We provide the tools and expertise to manage your compositions and maximize your earnings.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div
      className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col items-start shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="p-3 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
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
          className="w-8 h-8 text-purple-300"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Global Royalty Collection</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        We register your songs with over 200 Performance Rights Organizations (PROs) and collection societies worldwide,
        ensuring no royalty is left uncollected.
      </p>
    </div>

    <div
      className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col items-start shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="p-3 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
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
          className="w-8 h-8 text-purple-300"
        >
          <circle cx="12" cy="8" r="6"></circle>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Sync Licensing Opportunities</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Our dedicated team pitches your music for placements in TV, film, advertisements, and video games, opening up
        significant new revenue streams.
      </p>
    </div>

    <div
      className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col items-start shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="p-3 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
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
          className="w-8 h-8 text-purple-300"
        >
          <path d="m12 19 7-7 3 3-7 7-3-3z"></path>
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="m2 2 7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Copyright Registration &amp; Protection</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        We help protect your intellectual property by managing copyright registrations and monitoring for unauthorized
        use of your compositions.
      </p>
    </div>

    <div
      className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col items-start shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="p-3 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
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
          className="w-8 h-8 text-purple-300"
        >
          <line x1="3" x2="21" y1="22" y2="22"></line>
          <line x1="6" x2="6" y1="18" y2="11"></line>
          <line x1="10" x2="10" y1="18" y2="11"></line>
          <line x1="14" x2="14" y1="18" y2="11"></line>
          <line x1="18" x2="18" y1="18" y2="11"></line>
          <polygon points="12 2 20 7 4 7"></polygon>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">PRO Affiliation Assistance</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        New to publishing? We guide you through the process of affiliating with a PRO like ASCAP, BMI, or SESAC, a
        crucial step for any songwriter.
      </p>
    </div>

    <div
      className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col items-start shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="p-3 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
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
          className="w-8 h-8 text-purple-300"
        >
          <line x1="12" x2="12" y1="20" y2="10"></line>
          <line x1="18" x2="18" y1="20" y2="4"></line>
          <line x1="6" x2="6" y1="20" y2="16"></line>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Transparent Analytics</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Our dashboard provides clear, detailed reporting on your royalty earnings, breaking down where your money is
        coming from with easy-to-understand analytics.
      </p>
    </div>

    <div
      className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col items-start shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="p-3 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
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
          className="w-8 h-8 text-purple-300"
        >
          <line x1="2" x2="22" y1="2" y2="22"></line>
          <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"></path>
          <path d="M5 10v2a7 7 0 0 0 12 5"></path>
          <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"></path>
          <path d="M9 9v3a3 3 0 0 0 5.12 2.12"></path>
          <line x1="12" x2="12" y1="19" y2="22"></line>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">YouTube Content ID</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        We manage YouTube Content ID for your compositions, claiming and monetizing any video that uses your music,
        including fan-made content.
      </p>
    </div>
  </div>
</div>

        </div>
        </section>
        {/* <section className="py-16 md:py-24">
     <div className="text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-bold">
    Your All-in-One Publishing Administrator
  </h2>
  <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
    We provide the tools and expertise to manage your compositions and maximize your earnings.
  </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col items-start shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300">
    <div className="p-3 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-300" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">Global Royalty Collection</h3>
    <p className="text-gray-400 text-sm leading-relaxed">
      We register your songs with over 200 Performance Rights Organizations (PROs) and collection societies worldwide, ensuring no royalty is left uncollected.
    </p>
  </div>

  <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col items-start shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300">
    <div className="p-3 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-300" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">Sync Licensing Opportunities</h3>
    <p className="text-gray-400 text-sm leading-relaxed">
      Our dedicated team pitches your music for placements in TV, film, advertisements, and video games, opening up significant new revenue streams.
    </p>
  </div>

  <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col items-start shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300">
    <div className="p-3 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-300" viewBox="0 0 24 24">
        <path d="m12 19 7-7 3 3-7 7-3-3" />
        <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5" />
        <path d="m2 2 7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">Copyright Registration &amp; Protection</h3>
    <p className="text-gray-400 text-sm leading-relaxed">
      We help protect your intellectual property by managing copyright registrations and monitoring for unauthorized use of your compositions.
    </p>
  </div>

  <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col items-start shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300">
    <div className="p-3 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-300" viewBox="0 0 24 24">
        <line x1="3" x2="21" y1="22" y2="22" />
        <line x1="6" x2="6" y1="18" y2="11" />
        <line x1="10" x2="10" y1="18" y2="11" />
        <line x1="14" x2="14" y1="18" y2="11" />
        <line x1="18" x2="18" y1="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">PRO Affiliation Assistance</h3>
    <p className="text-gray-400 text-sm leading-relaxed">
      New to publishing? We guide you through the process of affiliating with a PRO like ASCAP, BMI, or SESAC, a crucial step for any songwriter.
    </p>
  </div>

  <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col items-start shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300">
    <div className="p-3 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-300" viewBox="0 0 24 24">
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">Transparent Analytics</h3>
    <p className="text-gray-400 text-sm leading-relaxed">
      Our dashboard provides clear, detailed reporting on your royalty earnings, breaking down where your money is coming from with easy-to-understand analytics.
    </p>
  </div>

  <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col items-start shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300">
    <div className="p-3 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-300" viewBox="0 0 24 24">
        <line x1="2" x2="22" y1="2" y2="22" />
        <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
        <path d="M5 10v2a7 7 0 0 0 12 5" />
        <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
        <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-white mb-2">YouTube Content ID</h3>
    <p className="text-gray-400 text-sm leading-relaxed">
      We manage YouTube Content ID for your compositions, claiming and monetizing any video that uses your music, including fan-made content.
    </p>
  </div>
</div>

<div className="container mx-auto px-4 mt-16">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold">We Collect From Every Source</h2>
    <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
      Music generates royalties in many ways. We track them all down for you.
    </p>
  </div>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
    <div className="text-center p-4 bg-slate-800/30 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 text-pink-400 mx-auto mb-3"
        viewBox="0 0 24 24"
      >
        <line x1="2" x2="22" y1="2" y2="22" />
        <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
        <path d="M5 10v2a7 7 0 0 0 12 5" />
        <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
        <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
      <p className="text-sm font-semibold text-gray-300">Performance Royalties</p>
    </div>

    <div className="text-center p-4 bg-slate-800/30 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 text-pink-400 mx-auto mb-3"
        viewBox="0 0 24 24"
      >
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
      </svg>
      <p className="text-sm font-semibold text-gray-300">Mechanical Royalties</p>
    </div>

    <div className="text-center p-4 bg-slate-800/30 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 text-pink-400 mx-auto mb-3"
        viewBox="0 0 24 24"
      >
        <path d="M7 21h10" />
        <rect width="20" height="14" x="2" y="3" rx="2" />
      </svg>
      <p className="text-sm font-semibold text-gray-300">Sync Royalties (TV/Film)</p>
    </div>

    <div className="text-center p-4 bg-slate-800/30 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 text-pink-400 mx-auto mb-3"
        viewBox="0 0 24 24"
      >
        <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
        <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
        <circle cx="12" cy="12" r="2" />
        <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
        <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
      </svg>
      <p className="text-sm font-semibold text-gray-300">Digital Performance (SiriusXM, etc.)</p>
    </div>

    <div className="text-center p-4 bg-slate-800/30 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 text-pink-400 mx-auto mb-3"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
      <p className="text-sm font-semibold text-gray-300">International Collections</p>
    </div>

    <div className="text-center p-4 bg-slate-800/30 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 text-pink-400 mx-auto mb-3"
        viewBox="0 0 24 24"
      >
        <line x1="3" x2="21" y1="22" y2="22" />
        <line x1="6" x2="6" y1="18" y2="11" />
        <line x1="10" x2="10" y1="18" y2="11" />
        <line x1="14" x2="14" y1="18" y2="11" />
        <line x1="18" x2="18" y1="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
      <p className="text-sm font-semibold text-gray-300">PRO/CMO Registrations</p>
    </div>
  </div>
</div>
        </section> */}

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
  <h2 className="text-3xl md:text-4xl font-bold">
    We Collect From Every Source
  </h2>
  <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
    Music generates royalties in many ways. We track them all down for you.
  </p>
</div>

   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      <div className="text-center p-4 bg-slate-800/30 rounded-lg">
        <MicOff className="w-10 h-10 text-pink-400 mx-auto mb-3" />
        <p className="text-sm font-bold text-gray-300">Performance Royalties</p>
      </div>

      <div className="text-center p-4 bg-slate-800/30 rounded-lg">
        <ChartNoAxesColumnIncreasing  className="w-10 h-10 text-pink-400 mx-auto mb-3" />
        <p className="text-sm font-bold text-gray-300">Mechanical Royalties</p>
      </div>

      <div className="text-center p-4 bg-slate-800/30 rounded-lg">
        <TvMinimal className="w-10 h-10 text-pink-400 mx-auto mb-3" />
        <p className="text-sm font-bold text-gray-300">Sync Royalties (TV/Film)</p>
      </div>

      <div className="text-center p-4 bg-slate-800/30 rounded-lg">
        <Radio className="w-10 h-10 text-pink-400 mx-auto mb-3" />
        <p className="text-sm font-bold text-gray-300">
          Digital Performance (SiriusXM, etc.)
        </p>
      </div>

      <div className="text-center p-4 bg-slate-800/30 rounded-lg">
        <Globe className="w-10 h-10 text-pink-400 mx-auto mb-3" />
        <p className="text-sm font-bold text-gray-300">International Collections</p>
      </div>

      <div className="text-center p-4 bg-slate-800/30 rounded-lg">
        <University className="w-10 h-10 text-pink-400 mx-auto mb-3" />
        <p className="text-sm font-bold text-gray-300">
          PRO/CMO Registrations
        </p>
      </div>
    </div>

            </div>
        </section>
        <section className="py-16 md:py-24 bg-slate-800/30">
        <div className="container mx-auto px-4 mt-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold">Simple Steps to Global Publishing</h2>
    <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Getting started is easy. Let us handle the rest.</p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    

    <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300">
      <div className="text-5xl font-extrabold text-purple-500/30 mb-4">01</div>
      <h4 className="text-xl font-bold text-white mb-2">Submit Your Songs</h4>
      <p className="text-gray-400 text-sm leading-relaxed">Easily add your compositions through our dashboard. Provide basic metadata and we take it from there.</p>
    </div>
    
  
    <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300">
      <div className="text-5xl font-extrabold text-purple-500/30 mb-4">02</div>
      <h4 className="text-xl font-bold text-white mb-2">We Register Worldwide</h4>
      <p className="text-gray-400 text-sm leading-relaxed">Our team registers your work with all necessary collection societies globally to ensure comprehensive coverage.</p>
    </div>
    
 
    <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300">
      <div className="text-5xl font-extrabold text-purple-500/30 mb-4">03</div>
      <h4 className="text-xl font-bold text-white mb-2">You Get Paid</h4>
      <p className="text-gray-400 text-sm leading-relaxed">Royalties flow directly into your CINECMS account, with detailed statements so you know exactly what you've earned.</p>
    </div>

  </div>
</div>

        </section>
        <section className="py-20 md:py-24">
          <div className="container  px-4 text-center mt-20">
  <div className=" rounded-2xl p-10 max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to claim the royalties you're owed?</h2>
    <p className="text-gray-400 mt-4 mb-8">Join CINECMS Publishing today and turn your compositions into a global revenue stream.</p>
    <a href="/login">
      <button className="inline-flex items-center justify-center font-medium bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-600 hover:from-teal-500 hover:to-sky-700 text-white text-lg py-4 px-8 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-all transform hover:scale-105 group">
        Get Started Now
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-5 w-5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
      </button>
    </a>
  </div>
</div>

        </section>
    </main>
    <Footer/>
  </div>
    </>
  );
}

export default CinePublishing;
