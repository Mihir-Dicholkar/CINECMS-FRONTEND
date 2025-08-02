import React, { useEffect } from "react";
import Header from "../Components/Header";
import logo from "../../public/mainlogo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBarsProgress, faMicrophoneAltSlash, faMusic, faPalette, faVideoCamera, faWifi } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
function Artist() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  return (
    <>
      <Header />
      <div className="min-h-screen bg-slate-900 text-white flex flex-col">
        <main className="flex-grow pt-24 md:pt-32">
          <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
            <h1 className="text-4xl md:text-6xl md:min-w-l font-extrabold tracking-tight px-5 mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mx-8">
              Track Your Release Status with CINECMS Release Tracker
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-12">
              Empowering Independent Artists and Labels with AI-Powered
              Strategies, Cutting-Edge Technology, and Robust Royalty
              Collection.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col items-start h-full shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                <div className="p-3 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 mb-6">
                  <FontAwesomeIcon
                    icon={faMusic}
                    className="text-3xl text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Global Music Distribution
                </h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                  Deliver your music to Spotify, Apple Music, TikTok, and 150+
                  other platforms worldwide. Keep 100% of your rights and
                  royalties.
                </p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col items-start h-full shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                <div className="p-3 rounded-full bg-gradient-to-br from-red-500 to-orange-500 mb-6">
                  <FontAwesomeIcon
                    icon={faVideoCamera}
                    className="text-3xl text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
               Video Distribution
                </h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                 Distribute your music videos to Vevo, Apple Music, Tidal, and more. Monetize your visual content and reach a wider audience.
                </p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col items-start h-full shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                <div className="p-3 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 mb-6">
                  <FontAwesomeIcon
                    icon={faWifi}
                    className="text-3xl text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                Sync Licensing
                </h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                 Get your music placed in films, TV shows, commercials, and video games. We pitch your tracks to music supervisors globally.
                </p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col items-start h-full shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 mb-6">
                  <FontAwesomeIcon
                    icon={faMicrophoneAltSlash}
                    className="text-3xl text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                Publishing Administration
                </h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
           Collect all the songwriting royalties you're owed from around the world. We register your songs and track your earnings.
                </p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col items-start h-full shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                <div className="p-3 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 mb-6">
                  <FontAwesomeIcon
                    icon={faBarsProgress}
                    className="text-3xl text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                Advanced Analytics
                </h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                Track your streams, downloads, and revenue with our powerful analytics dashboard. Understand your audience and grow your career.
                </p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col items-start h-full shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                <div className="p-3 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 mb-6">
                  <FontAwesomeIcon
                    icon={faPalette}
                    className="text-3xl text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
           Custom Cover Art & Branding
                </h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                 Work with our professional designers to create stunning cover art, logos, and branding that represents your unique sound.
                </p>
              </div>
            </div>
            <div className="mt-16">
              <a href="/signup">
                <button className="inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group">
                  Get Started Free <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </a>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Artist;
