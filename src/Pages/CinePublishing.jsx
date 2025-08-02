import React, { useEffect } from "react";
import Header from "../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faUserPlus,
  faCloudUpload,
  faGlobe,
  faChartColumn,
  faDollarSign,
  faCheckCircle,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
function CinePublishing() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  return (
    <>
      <Header />
      <main className="flex-grow bg-black pt-24 md:pt-32 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <section className="text-center py-12 md:py-16">
            <h1 className="text-4xl md:text-6xl font-extrabold py-3 tracking-tight bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              CINE Music Publishing
            </h1>
            <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-gray-300 mb-8">
              Unlock the full earning potential of your songs. We track down and
              collect every royalty you're owed, from every corner of the world.
            </p>
            <a href="/signup">
              <button className="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-4 text-lg rounded-lg shadow-xl">
                Start Collecting Royalties
              </button>
            </a>
          </section>
          <section className="py-16 md:py-24 bg-slate-500/50 rounded-2xl backdrop-blur-lg relative z-10 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 relative z-20">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:pr-8">
                  <h3 className="text-3xl md:text-4xl text-white font-bold mb-4">
                    What is Music Publishing ?
                  </h3>
                  <h4 className="font-semibold text-lg text-white   mb-3">
                    Music publishing is all about managing the royalties earned
                    from the music you write.
                  </h4>
                  <p className="text-md md:text-lg text-gray-300 mb-6 leading-relaxed">
                    When you write a song, and it’s used commercially, you’re
                    owed royalties. That means your original songs generate
                    revenue with every stream on Spotify, video creation on
                    TikTok, view on YouTube, radio spin, or live performance
                    worldwide.
                  </p>
                  <h4 className="font-semibold text-lg text-orange-300 mb-3">
                    That’s a lot to keep track of — CINE Publishing can help you
                    get the royalties you’re owed.
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <section
            id="features"
            className=" py-16 md:py-24 relative z-10 text-center bg-black"
          >
            {/* Heading with Gradient Span */}
            <h2 className="text-4xl md:text-5xl text-white font-black mb-4">
              Why Artists
              <span className="bg-gradient-to-r from-pink-500  to-orange-500 text-transparent bg-clip-text">
                Love CINECMS
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-2xl">
              We're built by musicians, for musicians. Experience the difference
              with features designed for your success.
            </p>

            {/* Card Row */}
            <div
              data-aos="fade-up"
              className="grid grid-cols-1 text-start md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
            >
              {/* Card 1 */}
              <div className="bg-slate-700/30 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-600/70 hover:border-pink-500/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-pink-500/20 backdrop-blur-sm group">
                <div className="mb-4 flex justify-start">
                  <div className="p-3 bg-gradient-to-br from-pink-600 to-orange-500 rounded-xl inline-block mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faGlobe} className="text-3xl" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-orange-400 group-hover:text-pink-400 transition-colors duration-300">
                  Keep 100% of Your Copyrights
                </h3>
                <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                  Collect your royalties without sacrificing ownership
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-700/30 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-600/70 hover:border-pink-500/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-pink-500/20 backdrop-blur-sm group">
                <div className="mb-4 flex justify-start">
                  <div className="p-3 bg-gradient-to-br from-pink-600 to-orange-500 rounded-xl inline-block mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon
                      icon={faChartColumn}
                      className="text-3xl"
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-orange-400 group-hover:text-pink-400 transition-colors duration-300">
                  Register Unlimited Songs Worldwide
                </h3>
                <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                  CINE Publishing collects from every paying territory, leaving
                  no royalties on the table.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-700/30 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-600/70 hover:border-pink-500/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-pink-500/20 backdrop-blur-sm group">
                <div className="mb-4 flex justify-start">
                  <div className="p-3 bg-gradient-to-br from-pink-600 to-orange-500 rounded-xl inline-block mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faDollarSign} className="text-3xl" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-orange-400 group-hover:text-pink-400 transition-colors duration-300">
                  Collect from Spotify, TikTok & more
                </h3>
                <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                  Earn mechanical and performance royalties with each stream on
                  hundreds of platforms.
                </p>
              </div>
              {/*card 4 */}
              <div className="bg-slate-700/30 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-600/70 hover:border-pink-500/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-pink-500/20 backdrop-blur-sm group">
                <div className="mb-4 flex justify-start">
                  <div className="p-3 bg-gradient-to-br from-pink-600 to-orange-500 rounded-xl inline-block mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon
                      icon={faBoltLightning}
                      className="text-3xl"
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-orange-400 group-hover:text-pink-400 transition-colors duration-300">
                  Expert Support
                </h3>
                <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                  Navigate the music industry with experts by your side.
                </p>
              </div>
            </div>
          </section>
          <section className="py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  The Publishing Dashboard
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  We’ve upgraded our publishing dashboard to make maximizing
                  your publishing earnings easier than ever.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 mt-1 mr-4 text-green-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                       
                      >
                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                        <path d="M5 3v4"></path>
                        <path d="M19 17v4"></path>
                        <path d="M3 5h4"></path>
                        <path d="M17 19h4"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Seamless Song Management
                      </h4>
                      <p className="text-gray-400">
                        Connect your Spotify for Artists profile to register
                        songs automatically.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 mt-1 mr-4 text-green-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      
                      >
                        <line x1="18" x2="18" y1="20" y2="10"></line>
                        <line x1="12" x2="12" y1="20" y2="4"></line>
                        <line x1="6" x2="6" y1="20" y2="14"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Advanced Analytics
                      </h4>
                      <p className="text-gray-400">
                        See how your songs perform across platforms and
                        countries.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 mt-1 mr-4 text-green-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                 
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                        <path d="M3 12A9 3 0 0 0 21 12"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Collect All Your Royalties
                      </h4>
                      <p className="text-gray-400">
                        Access publishing royalties and collect for other
                        songwriters you work with.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 mt-1 mr-4 text-green-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" x2="8" y1="13" y2="13"></line>
                        <line x1="16" x2="8" y1="17" y2="17"></line>
                        <line x1="10" x2="8" y1="9" y2="9"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Quarterly Royalty Statements
                      </h4>
                      <p className="text-gray-400">
                        The information you need, right at your fingertips.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default CinePublishing;
