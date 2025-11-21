import React, { useEffect } from "react";
import Header from "../Components/Header";
import logo from "../../public/mainlogo.png";
import { useNavigate } from "react-router-dom";
import {
  Link2,
  CheckSquare,
  CloudSun,
  Circle,
    Globe,
  BarChart3,
  DollarSign,
  Zap,
} from "lucide-react"; // pick lucide equivalents
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBarsProgress, faMicrophoneAltSlash, faMusic, faPalette, faVideoCamera, faWifi } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";
// HERO SECTION
  const headerContent = {
    title:
      "AI-Powered Artist Account Consolidation & Revenue Collection",
    description: (
      <>
        At <span className="font-semibold text-white">CINECMS</span>, we go
        beyond traditional music distribution. Our advanced system uses{" "}
        <span className="font-semibold text-purple-300">
          AI-powered technology
        </span>{" "}
        to seamlessly{" "}
        <span className="font-semibold text-white">
          merge all of an artist’s accounts across every major music platform
        </span>{" "}
        into one verified profile. This ensures your entire catalog is unified,
        your audience engagement is streamlined, and your brand identity is
        stronger than ever.
      </>
    ),
  };
  const aiTools = [
    {
      title: "Smart Account Linking",
      description:
        "Automatically detect and merge duplicate or scattered artist profiles across platforms.",
      icon: <Link2 className="h-7 w-7 text-white" />,
      bg: "from-sky-400 to-blue-600",
    },
    {
      title: "AI Royalty Tracking",
      description:
        "Monitor streams, downloads, and views in real-time with precise data consolidation.",
      icon: <CheckSquare className="h-7 w-7 text-white" />,
      bg: "from-emerald-400 to-green-600",
    },
    {
      title: "Revenue Forecasting",
      description: "Predict upcoming earnings using AI-driven analytics.",
      icon: <CloudSun className="h-7 w-7 text-white" />,
      bg: "from-purple-500 to-indigo-600",
    },
    {
      title: "Audience Insights",
      description:
        "Understand where your music is performing best with AI-powered data reports.",
      icon: <Circle className="h-7 w-7 text-white" />,
      bg: "from-amber-400 to-yellow-500",
    },
  ];

  const features = [
    "One verified artist identity across platforms",
    "Transparent and automated royalty management",
    "AI-powered insights & growth strategies",
    "Faster, smarter, and fairer revenue collection",
  ];
  // SECTION 2
 const features2 = [
    {
      icon: Globe,
      title: "Global Distribution",
      description:
        "Reach millions on Spotify, Apple Music, TikTok, and more. One upload, worldwide impact.",
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics",
      description:
        "Deep dive into your streams, downloads, and listener demographics with our intuitive dashboard.",
    },
    {
      icon: DollarSign,
      title: "Transparent Royalties",
      description:
        "Get paid fairly and on time. Track every penny earned with clear, detailed statements.",
    },
    {
      icon: Zap,
      title: "Lightning-Fast Releases",
      description:
        "Get your music live on major platforms faster than ever. No more waiting weeks.",
    },
  ];

function Artist() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  return (
    <>
      <Header />
      {/* <div className="min-h-screen bg-slate-900 text-white flex flex-col">
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
      </div> */}
      <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <main className="flex-grow pt-28 md:pt-36">
      <section className="container mx-auto px-4 md:px-8 py-12">
      {/* Header */}
        <div
      className="text-center mb-16"
      style={{ opacity: 1, transform: "none" }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500">
        {headerContent.title}
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
        {headerContent.description}
      </p>
    </div>

      {/* AI Tools */}
      <div className="mb-16 mx-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
          Our AI Tools Provide:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiTools.map((tool, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 flex flex-col items-start h-full shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className={`p-3 rounded-full bg-gradient-to-br ${tool.bg} mb-4`}>
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
              <p className="text-gray-400 leading-relaxed flex-grow">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Collection */}
      <div
        className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 md:p-12 mb-16"
        style={{ opacity: 1, transform: "none" }}
      >
        <p className="text-center text-lg md:text-xl text-gray-300 mb-8">
          Once your accounts are consolidated,{" "}
          <span className="font-semibold text-white">CINECMS collects all your revenue from every platform</span>{" "}
          and pays it directly to you with complete transparency. Artists can now focus on{" "}
          <span className="font-semibold text-green-400">creating music</span>, while our AI and expert team handle the rest.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-3"
              style={{ opacity: 1, transform: "none" }}
            >
              <CheckSquare className="h-6 w-6 text-green-400 flex-shrink-0" />
              <span className="text-gray-200">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12" style={{ opacity: 1 }}>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
          CINECMS –{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-purple-500">
            Where Music Meets AI for Artists’ Success.
          </span>
        </h3>

        <button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 font-bold text-lg text-white rounded-full px-10 py-6 relative overflow-hidden group bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 animate-button-gradient shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-75 group-hover:opacity-100 transition-opacity duration-1000 group-hover:duration-200 animate-tilt"></span>
          <span className="relative">Apply for Consolidation</span>
        </button>
      </div>
    </section>
       <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 md:p-12">
          {/* Heading */}
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            Why Artists Love CINECMS
          </h3>
          <p className="text-md md:text-lg text-gray-400 text-center mb-12 md:mb-16 max-w-xl mx-auto">
            We're built by musicians, for musicians. Experience the difference
            with features designed for your success.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 md:mx-15">
            {features2.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-700/30 border border-slate-600/70 hover:border-pink-500/70 transition-all duration-300 hover:shadow-pink-500/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl group"
              >
                <div className="p-3 bg-gradient-to-br from-pink-600 to-orange-500 rounded-xl inline-block mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl font-semibold mb-2 text-orange-400 group-hover:text-pink-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
        <section className="py-12 md:py-20 bg-slate-800/20">
  <div className="container mx-auto px-4 md:px-8">
    <div
      className="bg-slate-800/50 border border-purple-500/30 rounded-2xl p-8 md:p-12 shadow-2xl shadow-purple-900/20 backdrop-blur-lg flex flex-col md:flex-row items-center gap-8"
      style={{ opacity: 1, transform: "none" }}
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" style={{ transform: "none" }}>
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
            className="h-12 w-12 text-white"
          >
            <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"></path>
            <path d="M6 9.01V9"></path>
            <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"></path>
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-grow text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Artist Meta Re-Tagging Tool
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl">
          Need to correct a typo, update a feature, or change your song's metadata? Our team can help you re-tag your releases quickly and efficiently.
        </p>
      </div>

      {/* Button */}
      <div className="flex-shrink-0">
        <button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 font-bold text-lg text-white rounded-full px-8 py-6 relative overflow-hidden group bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-600 animate-button-gradient shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-600 opacity-75 group-hover:opacity-100 transition-opacity duration-1000 group-hover:duration-200 animate-tilt"></span>
          <span className="relative flex items-center">
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
              className="mr-2 h-5 w-5"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
              <path d="M5 3v4"></path>
              <path d="M19 17v4"></path>
              <path d="M3 5h4"></path>
              <path d="M17 19h4"></path>
            </svg>
            Apply for Re-Tagging
          </span>
        </button>
      </div>
    </div>
  </div>
</section>

      </main>
      </div>
      <Footer />
    </>
  );
}

export default Artist;
