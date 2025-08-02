import React, { useEffect } from "react";
import Header from "../Components/Header";
import logo from "../../public/mainlogo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faUserPlus,
  faCloudUpload,
  faGlobe,
  faChartColumn,
  faDollarSign,
  faCheckCircle, faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";

function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  return (
    <>
      <Header />
      <main>
        <section className="w-full min-h-screen flex items-center justify-center bg-black px-4">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mt-48  ">
            {/* Rotating Logo with Border */}

            {/* Headings */}
            <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 md:min-w-6xl">
              Worldwide Music, Video &amp; Movie Distribution
            </h1>

            {/* Paragraph */}
            <p className="text-[#dfd9ff] font-medium lg:text-[26px] sm:text-[22px] xs:text-[18px] text-[16px] lg:leading-[40px] mt-4 max-w-3xl mx-auto">
              Empowering Independent Artists and Labels with AI-Powered
              Strategies, Cutting-Edge Technology, and Robust Royalty
              Collection.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <button className="inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group">
                Get Started Free{" "}
                <FontAwesomeIcon
                  icon={faArrowCircleRight}
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className=" py-16 text-center md:py-24 bg-slate-800/50 backdrop-blur-md relative z-10"
        >
          {/* Heading with Gradient Span */}
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Your Music Journey:
            <span className="bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 text-transparent bg-clip-text">
              Simplified in 3 Steps
            </span>
          </h2>

          {/* Description Paragraph */}
          <p className="text-gray-200 max-w-2xl mx-auto mb-12 text-2xl">
            From your studio to the world's stage. We handle the complexity, so
            you can focus on creating.
          </p>

          {/* Card Row */}
          <div
            data-aos="fade-up"
            className="grid md:grid-cols-3 gap-6 md:gap-10 px-9"
          >
            {/* Card 1 */}
            <div className="bg-slate-700/40 rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-purple-500/50 shadow-purple-200 border-2 border-purple-500">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-purple-300 shadow-md flex items-center justify-center bg-white transition-transform transform hover:rotate-25">
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    className="text-purple-500 text-4xl"
                  />
                </div>
              </div>
              <h3 className="text-xl text-purple-400 font-bold mb-2">
                1. Create Your Account
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Sign up in seconds. Set up your artist or label profile with
                ease.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-700/40  rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-cyan-500/50 shadow-cyan-200 border border-cyan-500">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-cyan-300 shadow-md flex items-center justify-center bg-white transition-transform transform hover:rotate-25">
                  <FontAwesomeIcon
                    icon={faCloudUpload}
                    className="text-cyan-500 text-5xl"
                  />
                </div>
              </div>
              <h3 className="text-xl text-cyan-400 font-bold mb-2">
                2. Upload & Perfect
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Drag & drop your tracks, add artwork, and fine-tune your release
                metadata.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-700/40  rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-amber-400/50 shadow-amber-200 border border-amber-500">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 rounded-full border-4 border-amber-300 shadow-md flex items-center justify-center bg-white transition-transform transform hover:rotate-25">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-amber-500 text-5xl"
                  />
                </div>
              </div>
              <h3 className="text-xl text-amber-400 font-bold mb-2">
                3. Go Global & Get Paid
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Distribute to 150+ platforms. Track streams and get your
                royalties, hassle-free
              </p>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
          >
            {/* Card 1 */}
            <div className="bg-slate-700/30 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-600/70 hover:border-pink-500/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-pink-500/20 backdrop-blur-sm group">
              <div className="mb-4 flex justify-start">
                <div className="p-3 bg-gradient-to-br from-pink-600 to-orange-500 rounded-xl inline-block mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faGlobe} className="text-3xl" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-orange-400 group-hover:text-pink-400 transition-colors duration-300">
                Global Distribution
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                Reach millions on Spotify, Apple Music, TikTok, and more. One
                upload, worldwide impact.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-700/30 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-600/70 hover:border-pink-500/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-pink-500/20 backdrop-blur-sm group">
              <div className="mb-4 flex justify-start">
                <div className="p-3 bg-gradient-to-br from-pink-600 to-orange-500 rounded-xl inline-block mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faChartColumn} className="text-3xl" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-orange-400 group-hover:text-pink-400 transition-colors duration-300">
                Powerful Analytics
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                Deep dive into your streams, downloads, and listener
                demographics with our intuitive dashboard.
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
                Transparent Royalties
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                Get paid fairly and on time. Track every penny earned with
                clear, detailed statements.
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
                Lightning-Fast Releases
              </h3>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                Get your music live on major platforms faster than ever. No more
                waiting weeks.
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-slate-800/30 backdrop-blur-sm relative z-10 text-center">
          {/* Heading with Gradient Span */}
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Manage Your
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
              Artist Presence
            </span>
          </h2>

          {/* Description Paragraph */}
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-2xl">
            Take control of your profiles on major platforms. CINECMS helps you
            get set up and verified.
          </p>

          {/* Card Row */}
          <div
            data-aos="fade-up"
            className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
          >
            {/* Card 1 */}
            <div className="bg-slate-600/50 rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-green-500/50 shadow-green-200 border-2 border-green-500/50 hover:border-green-400/70">
              <div className="mb-4 flex flex-row items-center justify-center space-x-2">
                <div className="w-16 h-16 rounded-full border-4 border-green-300 shadow-md flex items-center justify-center bg-white">
                  <img
                    src="/spotify.png"
                    alt="Idea"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="tracking-tight mb-4 mt-0 text-xl md:text-2xl font-semibold text-green-500">
                  Spotify for Artists
                </h3>
              </div>
             <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Update your bio and artist photos, share updates with fans
                through Artist Pick, and feature playlists.
              </p>
              <button
                onClick={() =>
                  window.open("https://artists.spotify.com/claim", "_blank")
                }
                className="w-full mt-12 bg-gradient-to-r from-green-500 via-cyan-550 to-green-300 text-white font-semibold py-2 rounded-lg shadow-md hover:scale-105 transform transition duration-300 shadow-pink-400/40"
              >
                Claim Your Profile
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-600/40 rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-cyan-500/50 shadow-cyan-200 border border-cyan-500">
              <div className="mb-4 flex flex-row items-center space-x-2 justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-cyan-300 shadow-md flex items-center justify-center bg-white">
                  <img
                    src="/icons/lightbulb.svg"
                    alt="Idea"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="tracking-tight text-xl md:text-2xl font-semibold mb-4 text-cyan-400">
                  Apple Music for Artists
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Add personality to your artist profile, upload lyrics for each
                track, and access your data and insights.
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://idmsa.apple.com/IDMSWebAuth/signin?appIdKey=aedaf61d3409ff5b207ca383bb2f7d2f61b2bdd90c34ddd7add0665784250266&rv=1&path=%2Fa%2Frequest%2F1675165810&authResult=FAILED",
                    "_blank"
                  )
                }
                className="w-full mt-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-green-500 text-white font-semibold py-2 rounded-lg shadow-md hover:scale-105 transform transition duration-300 shadow-pink-400/40"
              >
                Access Apple Music
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-600/40 rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-amber-400/50 shadow-amber-200 border border-amber-500">
              <div className="mb-4 flex flex-row items-center space-x-2 justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-amber-300 shadow-md flex items-center justify-center bg-white">
                  <img
                    src="/icons/lightbulb.svg"
                    alt="Idea"
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="tracking-tight text-xl md:text-2xl font-semibold mb-4 text-amber-300">
                  Official Artist Channel (OAC)
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                All content & subscribers from across your channels together in
                one place, plus Analytics for Artists.
              </p>
              <button
                onClick={() =>
                  window.open("https://artists.spotify.com/claim", "_blank")
                }
                className="w-full mt-5 bg-gradient-to-r from-amber-500 via-yellow-500 to-red-500 text-white font-semibold py-2 rounded-lg shadow-md hover:scale-105 transform transition duration-300 shadow-pink-400/40"
              >
                Inquire About OAC
              </button>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-slate-900/50 backdrop-blur-lg relative z-10 overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 relative z-20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:pr-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Maximize Your Earnings with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                    {" "}
                    Music Publishing
                  </span>
                </h3>
                <p className="text-md md:text-lg text-gray-300 mb-6 leading-relaxed">
                  Distribution isn’t the only way to make money as an
                  independent musician. When you write a song, you’re owed
                  royalties. Your original songs generate publishing revenue
                  with every stream on Spotify, video creation on TikTok, view
                  on YouTube, radio spin, or live performance worldwide.
                </p>
                <h4 className="font-semibold text-lg text-orange-300 mb-3">
                  Lets us Help You get the Royalties youre owned by
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    {" "}
                    <FontAwesomeIcon
                      className="h-5 w-5 text-orange-400 mr-2 mt-1 flex-shrink-0"
                      icon={faArrowCircleRight}
                    />{" "}
                    Collecting your royalties globally/worldwide.
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon
                      className="h-5 w-5 text-orange-400 mr-2 mt-1 flex-shrink-0"
                      icon={faArrowCircleRight}
                    />{" "}
                    Tracking your publishing royalties from thousands of pay
                    sources.
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon
                      className="h-5 w-5 text-orange-400 mr-2 mt-1 flex-shrink-0"
                      icon={faArrowCircleRight}
                    />{" "}
                    Offering advanced analytics on your performance and
                    mechanical royalties.
                  </li>
                </ul>
                <p class="font-bold text-lg text-white mt-6">
                  All while you keep 100% of your copyrights.
                </p>
                <a href="/cine-publishing">
                  <button class="inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 px-8 mt-8 bg-gradient-to-r from-amber-500 via-orange-700 to-red-800 hover:from-amber-600 hover:via-orange-300 hover:to-red-700 text-white text-base md:text-lg py-3 rounded-md shadow-lg hover:shadow-xl transition-all transform hover:scale-102 group">
                    LEARN MORE
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
                      class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-45 px-4 bg-black text-center">
          {/* Heading with gradient span */}
          <h2 className="text-6xl text-white font-bold mb-4">
            Explore{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-600  to-indigo-500 bg-clip-text text-transparent">
              CINE AI
            </span>{" "}
            Music Tools
          </h2>

          {/* Description paragraph */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-xl">
            Start creating, publishing, and managing your media content
            effortlessly with cutting-edge tools designed for artists and
            content creators.
          </p>

          {/* Button with icon */}
          <button className="inline-flex max-w-2xl text-2xl items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white px-22 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 mb-4">
            <FontAwesomeIcon icon={faBoltLightning} />
            Discover AI Music Generation
          </button>

          {/* Small note under button */}
          <p className="text-l max-w-2xl mx-auto mb-8 text-gray-500">
            Click to explore AI music creation and more on our dedicated CINE AI
            page.
          </p>
        </section>
        <section className="py-45 px-4 bg-black text-center">
          {/* Heading with gradient span */}
          <h2 className="text-6xl text-white font-bold mb-4">
            AI-Powered{" "}
            <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Distribution Insights
            </span>{" "}
          </h2>

          {/* Description paragraph */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-xl">
            Leverage AI for strategic planning. Get insights on reaching your
            target audience, optimizing release schedules, and more.
          </p>

          {/* Button with icon */}
          <button className="inline-flex max-w-2xl text-2xl items-center gap-2 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 text-white px-22 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 mb-4">
            <FontAwesomeIcon icon={faBoltLightning} />
            Explore AI Strategy Tools
          </button>

          {/* Small note under button */}
          <p className="text-m max-w-2xl mx-auto mb-8 text-gray-500">
            Visit our CINE AI page to see how AI can shape your music
            distribution.
          </p>
        </section>
        <section
          id="pricing"
          className=" py-16 md:py-24 bg-slate-800/50 backdrop-blur-md relative z-10 text-center"
        >
          {/* Heading with Gradient Span */}
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Choose Your
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
              Perfect Plan
            </span>
          </h2>

          {/* Description Paragraph */}
          <p className="text-md md:text-lg text-gray-200 text-center mb-12 md:mb-16 max-w-xl mx-auto">
            Simple, transparent pricing. No hidden fees. Ever. (Pricing is
            illustrative)
          </p>

          {/* Card Row */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Card 1 */}
            <div className="bg-slate-700/40 rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-purple-500/50 shadow-purple-200 border-2 border-purple-500">
              {/* Headings */}
              <div className="flex flex-col items-start mb-4">
                <h3 className="text-4xl font-extrabold text-gray-800 mb-1">
                  Spark
                </h3>
                <h4 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Free
                </h4>
              </div>

              {/* List */}
              <ul className="space-y-2 mb-8 text-gray-300 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  1 Artist Profile
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  Unlimited Releases
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  Basic Analytics
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  Community Support
                </li>
              </ul>

              {/* Button */}
              <button class="inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-11 mt-16 px-8 w-full border-cyan-500 text-cyan-300 hover:bg-cyan-500/20 py-3 md:py-3.5 text-base rounded-md transition-transform transform hover:scale-105">
                Get Started Free
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-700/40 rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-purple-500/50 shadow-purple-200 border-2 border-purple-500">
              {/* Headings */}
              <div className="flex flex-col items-start mb-4">
                <h3 className="text-4xl font-extrabold text-gray-800 mb-1">
                  Amplify
                </h3>
                <div className="flex items-baseline gap-1">
                  <h4 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                    $12
                  </h4>
                  <span className="text-lg text-gray-400  font-normal tracking-wide">
                    /mo
                  </span>
                </div>
              </div>

              {/* List */}
              <ul className="space-y-2 mb-8 text-gray-300 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  5 Artist Profiles
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  Unlimited Releases
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  Advance Analytics and trends
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  Priority Email Support
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  Custom Release Dates
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  Youtube Content ID
                </li>
              </ul>

              {/* Button */}
              <button class="inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 px-8 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg shadow-indigo-500/30 py-3 md:py-3.5 text-base rounded-md transition-transform transform hover:scale-105">
                Choose Amplify
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-700/40 rounded-xl justify-start p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-purple-500/50 shadow-purple-200 border-2 border-purple-500">
              {/* Headings */}
              <div className="flex flex-col items-start mb-4">
                <h3 className="text-4xl font-extrabold text-gray-800 mb-1">
                  Label Pro
                </h3>
                <div className="flex items-baseline gap-1">
                  <h4 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                    $35
                  </h4>
                  <span className="text-lg text-gray-400 font-normal tracking-wide">
                    /mo
                  </span>
                </div>
              </div>

              {/* List */}
              <ul className="space-y-2 mb-8 text-gray-300 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  Unlimited Artist Profiles
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  Unlimited Releases
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  Full Analytics Suite
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  Dedicated Account Manager
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  Bulk Upload & Management
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1"
                  />
                  Custom Label Branding
                </li>
              </ul>

              {/* Button */}
              <button class="inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-11 px-8 w-full border-purple-500 text-purple-300 hover:bg-purple-500/20 py-3 md:py-3.5 text-base rounded-md transition-transform transform hover:scale-105">
                Go Label Pro
              </button>
            </div>
          </div>
          {/* Description Paragraph */}
          <p className="text-gray-100 max-w-3xl mx-auto mt-6 mb-12 text-l">
            All plans come with a 14-day money-back guarantee. No contracts,
            cancel anytime.
          </p>
        </section>
        <section className="py-45 bg-black px-4 text-center">
          {/* Heading with gradient span */}
          <h2 className="text-6xl font-bold text-white mb-4">
            Ready to Make Waves with{" "}
            <span className="bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              CINECMS
            </span>{" "}
            ?
          </h2>

          {/* Description paragraph */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-xl">
            Join the community of successful independent artists. Your next hit
            is waiting to be heard.
          </p>

          {/* Button with icon */}
          <button className="inline-flex max-w-2xl text-2xl items-center gap-2 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 text-white px-22 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 mb-4">
            Launch your Music Now
          </button>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Home;
