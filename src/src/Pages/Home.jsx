import React, { useEffect } from "react";
import Header from "../Components/Header";
import logo from "../../public/mainlogo.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { UserPlus, CheckCircle, Globe } from "lucide-react";
import {  BarChart3, DollarSign, Zap } from "lucide-react";
import {
  faCheckCircle, faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";


const cardHoverStyles = `
  .custom-hover {
    background-color: rgba(30, 41, 59, 0.6); /* bg-slate-800/60 */
    padding: 1.5rem; /* p-6 (for mobile) */
    border-radius: 0.75rem; /* rounded-xl */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -4px rgba(0, 0, 0, 0.1); /* shadow-lg */
    border: 1px solid rgba(168, 85, 247, 0.5); /* border-purple-500/50 */
    text-align: center;
    transition: all 0.3s ease-in-out;
    transform: scale(1);
    backdrop-filter: blur(4px); /* backdrop-blur-sm */
  }
  .custom-hover:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 25px -5px rgba(168, 85, 247, 0.4),
                0 10px 10px -5px currentColor; /* hover:shadow-current-ish */
    background-color: rgba(51, 65, 85, 0.8); /* darker bg on hover */
  }
}`;

  const heroData = {
    backgroundImage:
      "https://horizons-cdn.hostinger.com/8f5cf60f-f1cb-451f-8996-7971468e9644/a1aee7587894c37f2b65326d170393ca.jpg",
    title: "Worldwide Music, Video & Movie Distribution",
    description:
      "Empowering Independent Artists and Labels with AI-Powered Strategies, Cutting-Edge Technology, and Robust Royalty Collection.",
    actions: [
      {
        label: "Get Started Free",
        href: "/signup",
        icon: ArrowRight,
      },
      // 👉 you can add more buttons here later if needed
    ],
  };
// SECTION 2
 const steps = [
    {
      id: 1,
      title: "1. Join The Waitlist",
      description: "Create your account to join our waitlist.",
      border: "border-purple-500/50",
      iconWrapper: "border-purple-500/50",
      iconColor: "text-purple-400",
      titleColor: "text-purple-400",
      Icon: UserPlus,
    },
    {
      id: 2,
      title: "2. Get Approved",
      description:
        "Our team will review your profile. Once approved, you unlock our full suite of tools.",
      border: "border-pink-500/50",
      iconWrapper: "border-pink-500/50",
      iconColor: "text-pink-400",
      titleColor: "text-pink-400",
      Icon: CheckCircle,
    },
    {
      id: 3,
      title: "3. Go Global & Get Paid",
      description:
        "Distribute to 150+ platforms. Track streams and get your royalties, hassle-free.",
      border: "border-teal-500/50",
      iconWrapper: "border-teal-500/50",
      iconColor: "text-teal-400",
      titleColor: "text-teal-400",
      Icon: Globe,
    },
  ];
// SECTION 3
  const features = [
    {
      id: 1,
      title: "Global Distribution",
      description:
        "Reach millions on Spotify, Apple Music, TikTok, and more. One upload, worldwide impact.",
      Icon: Globe,
    },
    {
      id: 2,
      title: "Powerful Analytics",
      description:
        "Deep dive into your streams, downloads, and listener demographics with our intuitive dashboard.",
      Icon: BarChart3,
    },
    {
      id: 3,
      title: "Transparent Royalties",
      description:
        "Get paid fairly and on time. Track every penny earned with clear, detailed statements.",
      Icon: DollarSign,
    },
    {
      id: 4,
      title: "Lightning-Fast Releases",
      description:
        "Get your music live on major platforms faster than ever. No more waiting weeks.",
      Icon: Zap,
    },
  ];

  // Section 5
 const platforms = [
    {
      id: 1,
      title: "Spotify for Artists",
      description:
        "Update your bio and artist photos, share updates with fans through Artist Pick, and feature playlists.",
      img: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png",
      alt: "Spotify for Artists logo",
      border: "green",
      btnText: "Claim Your Profile",
      btnLink: "https://artists.spotify.com/claim",
    },
    {
      id: 2,
      title: "Apple Music for Artists",
      description:
        "Add personality to your artist profile, upload lyrics for each track, and access your data and insights.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png",
      alt: "Apple Music for Artists logo",
      border: "pink",
      btnText: "Access Apple Music",
      btnLink: "https://artists.apple.com/",
    },
    {
      id: 3,
      title: "Official Artist Channel",
      description:
        "All content & subscribers from across your channels together in one place, plus Analytics for Artists.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png",
      alt: "Official Artist Channel logo",
      border: "red",
      btnText: "Inquire about OAC",
      btnLink: "/contact",
    },
  ];
// SECTION 6
  const publishingData = {
  heading: "Maximize Your Earnings with",
  gradientText: "Music Publishing",
  description:
    "Don't leave money on the table. Our publishing administration service ensures you collect all the royalties your compositions generate worldwide.",
  features: [
    "Global Royalty Collection",
    "Sync Licensing Opportunities",
    "YouTube Content ID Monetization",
    "Comprehensive Analytics",
  ],
  button: {
    text: "Learn More About Publishing",
    href: "/cine-publishing",
  },
  image: {
    src: "https://horizons-cdn.hostinger.com/8f5cf60f-f1cb-451f-8996-7971468e9644/2825595675d9a10f60e0a1543d925550.png",
    alt: "Close-up of a hand reaching out to touch glowing musical notes and sound waves, symbolizing music production or digital distribution",
  },
};
// SECTION 10
const pricingData = {
  heading: "Our Partnership Model:",
  gradientHeading: "Built for Your Success",
  description: (
    <>
      We don't sell plans; we build partnerships.
      <br className="hidden sm:block" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-teal-400">
        Guaranteed extra revenue from day one.
      </span>
    </>
  ),
  cards: [
    {
      title: "Spark",
      percentage: "85% to You",
      description: "For emerging artists ready to make their mark.",
      features: [
        "Global Distribution",
        "Unlimited Releases",
        "Basic Analytics",
        "Community Support",
      ],
      button: { text: "Get Started Free", href: "/login" },
      styles:
        "bg-slate-700/40 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-600/70 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:border-cyan-400/70",
      buttonStyles:
        "inline-flex items-center justify-center font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-11 mt-16 px-8 w-full border-cyan-500 text-cyan-300 hover:bg-cyan-500/20 py-3 md:py-3.5 text-base rounded-md transition-transform transform hover:scale-105",
      titleColor: "text-cyan-400",
      percentageColor: "text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300",
    },
    {
      title: "Amplify",
      percentage: "90% to You",
      description: "For established artists scaling their reach.",
      features: [
        "All Spark features, plus:",
        "Advanced Analytics & Trends",
        "Priority Email Support",
        "YouTube Content ID",
      ],
      button: { text: "Amplify Your Reach", href: "/login" },
      styles:
        "bg-slate-700/40 p-6 md:p-8 rounded-2xl shadow-xl border border-indigo-500 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:border-indigo-400/70",
      buttonStyles:
        "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 px-8 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg shadow-indigo-500/30 py-3 md:py-3.5 text-base rounded-md transition-transform transform hover:scale-105",
      titleColor: "text-indigo-400",
      percentageColor: "text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300",
      badge: { text: "MOST POPULAR", styles: "absolute top-0 right-0 bg-indigo-500 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-lg shadow-md" },
    },
    {
      title: "Label Pro",
      percentage: "95% to You",
      description: "For labels and industry professionals.",
      features: [
        "All Amplify features, plus:",
        "Dedicated Account Manager",
        "Bulk Upload & Management",
        "Custom Label Branding",
      ],
      button: { text: "Go Pro", href: "/login" },
      styles:
        "bg-slate-700/40 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-600/70 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:border-purple-400/70",
      buttonStyles:
        "inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-11 px-8 w-full border-purple-500 text-purple-300 hover:bg-purple-500/20 py-3 md:py-3.5 text-base rounded-md transition-transform transform hover:scale-105",
      titleColor: "text-purple-400",
      percentageColor: "text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300",
    },
  ],
  footer: "All plans come with a 14-day money-back guarantee. No contracts, cancel anytime.",
};

function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0A0A0A] text-white flex flex-col  overflow-x-hidden">
         <section className="relative w-full h-[calc(100vh-theme(spacing.24))] mx-auto overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${heroData.backgroundImage}")`,
          opacity: 0.15,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        {/* Headings */}
        <div style={{ opacity: 1, transform: "none" }}>
          <h1 className="font-black lg:text-[72px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 animate-gradient-text bg-gradient-to-r from-orange-400 via-blue-500 to-green-400 bg-clip-text text-transparent">
            {heroData.title}
          </h1>
          <p className="font-medium lg:text-[26px] sm:text-[22px] xs:text-[18px] text-[16px] lg:leading-[40px] mt-4 max-w-4xl mx-auto text-gray-300">
            {heroData.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10" style={{ opacity: 1, transform: "none" }}>
          {heroData.actions.map((action, idx) => (
            <a key={idx} href={action.href}>
              <button
                className="group inline-flex items-center justify-center whitespace-nowrap font-medium 
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-400
                  disabled:pointer-events-none disabled:opacity-50
                  bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-600
                  hover:from-teal-500 hover:to-sky-700
                  text-white text-lg py-4 px-8 rounded-full
                  shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30
                  transition-all duration-300 transform hover:scale-105"
              >
                {action.label}
                {action.icon && (
                  <action.icon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>
            </a>
          ))}
        </div>
      </div>
    </section>
         <section
      id="how-it-works"
      className="relative w-full h-[calc(100vh-theme(spacing.24))] mx-auto overflow-hidden flex items-center justify-center"
    >
   
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <h3
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ opacity: 1, transform: "none" }}
        >
          Your Music Journey:{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500">
            Simplified in 3 Steps
          </span>
        </h3>

        <p
          className="text-md md:text-lg text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto"
          style={{ opacity: 1, transform: "none" }}
        >
          From your studio to the world's stage. We handle the complexity, so
          you can focus on creating.
        </p>

        {/* Step Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {steps.map((step) => (
          <div
      className="bg-slate-800/60 p-6 md:p-8 rounded-xl shadow-lg border border-purple-500/50 text-center transition-all duration-300 transform  hover:shadow-lg hover:shadow-current backdrop-blur-sm"
      style={{ opacity: 1, transform: "none" }}
    >
              <div
                className={`p-3 bg-gradient-to-br from-slate-900 to-slate-800 rounded-full inline-block mb-5 shadow-inner ${step.iconWrapper}`}
                style={{ transform: "none" }}
              >
                <step.Icon
                  className={`h-10 w-10 md:h-12 md:w-12 hover:rotate-5 delay-300 ${step.iconColor}`}
                />
              </div>
              <h4
                className={`text-xl md:text-2xl font-semibold mb-2 ${step.titleColor}`}
              >
                {step.title}
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section id="features" className="py-16 md:py-24 relative z-10 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
          Why Artists Love CINECMS
        </h3>
        <p className="text-md md:text-lg text-gray-400 text-center mb-12 md:mb-16 max-w-xl mx-auto">
          We're built by musicians, for musicians. Experience the difference with
          features designed for your success.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 mx-24">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-slate-700/30 border border-slate-600/70 hover:border-pink-500/70 transition-all duration-300 hover:shadow-pink-500/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl group"
            >
              <div className="p-3 bg-gradient-to-br from-pink-600 to-orange-500 rounded-xl inline-block mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <feature.Icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
              </div>
              <h4 className="text-xl md:text-2xl md:text-w-2xl font-semibold mb-2 text-orange-400 group-hover:text-pink-400 transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
        <section
  id="clients"
  className="py-16 md:py-24 bg-slate-900/30 relative z-10"
>
  <div className="container mx-auto px-4 md:px-8">
    <h3
      className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-400"
      style={{ opacity: 1, transform: 'none' }}
    >
      Trusted by Industry Leaders & Emerging Labels
    </h3>

    <div className="relative">
      <div className="flex overflow-hidden group">
        <div
          className="flex space-x-16 animate-marquee group-hover:pause"
          style={{ transform: 'translateX(-88.985%) translateZ(0px)' }}
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <img
              src="https://images.unsplash.com/photo-1594998800407-dfffecba702b"
              alt="SRM STUDIO"
              className="h-10 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
            />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <img
              src="https://srmstudio.in/assets/images/logo_icon/logo.png"
              alt="SRM STUDIO"
              className="h-10 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
       <section className="py-16 md:py-24 bg-slate-800/30 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Manage Your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500">
            Artist Presence
          </span>
        </h3>
        <p className="text-md md:text-lg text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          Take control of your profiles on major platforms. CINECMS helps you get
          set up and verified.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {platforms.map((p) => (
            <div key={p.id} className="h-full">
              <div
                className={`text-card-foreground bg-slate-700/50 border border-${p.border}-500/50 hover:border-${p.border}-400/70 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-${p.border}-500/20 flex flex-col h-full backdrop-blur-sm`}
              >
                {/* Logo & Title */}
                <div className="space-y-1.5 p-6 flex flex-row items-center space-x-4 pb-4">
                  <div className="p-2 rounded-lg bg-slate-800 shadow-md">
                    <img
                      src={p.img}
                      alt={p.alt}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <h3
                    className={`tracking-tight text-xl md:text-2xl font-semibold text-${p.border}-400`}
                  >
                    {p.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="p-6 pt-0 flex-grow">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed min-h-[6em] md:min-h-[5em]">
                    {p.description}
                  </p>
                </div>

                {/* Button */}
                <div className="p-6 pt-0 mt-auto">
                  <a href={p.btnLink} target="_blank" rel="noopener noreferrer">
                    <button
                      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 w-full border-${p.border}-500/50 hover:border-${p.border}-400/70 text-${p.border}-400 hover:bg-${p.border}-400 hover:text-white`}
                    >
                      {p.btnText}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
       <section className="py-20 md:py-32 bg-slate-900/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10" style={{ opacity: 1, transform: "none" }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
              {publishingData.heading}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                {publishingData.gradientText}
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">{publishingData.description}</p>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              {publishingData.features.map((item) => (
                <li key={item} className="flex items-center text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a href={publishingData.button.href}>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-purple-500/20 hover:shadow-xl transition-all transform hover:scale-105 group">
                {publishingData.button.text}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </a>
          </div>

          {/* Right Image */}
          <div className="relative h-80 md:h-96" style={{ opacity: 1, transform: "none" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-3xl blur-2xl"></div>
            <div
              className="absolute inset-0 w-full h-full p-4"
              style={{
                transform:
                  "translateX(0.13984%) translateY(-0.27967%) rotate(0.86016deg) translateZ(0px)",
              }}
            >
              <img
                src={publishingData.image.src}
                alt={publishingData.image.alt}
                className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-black/50 transition-transform duration-500 hover:scale-105 hover:rotate-1 transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
        <section className="py-16 md:py-24 bg-slate-900/50 backdrop-blur-lg relative z-10 overflow-hidden">
        <div
  className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full filter blur-3xl opacity-50 animate-pulse"
  style={{ transform: 'scale(1.08136) translateZ(0px)' }}
></div>
<div
  className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-500/30 rounded-full filter blur-3xl opacity-50 animate-pulse"
  style={{ transform: 'scale(1.08507) translateZ(0px)' }}
></div>


     <div className="container mx-auto px-4 md:px-8 relative z-20">
  <div style={{ opacity: 1, transform: 'none' }}>
    <div className="text-center mb-12 md:mb-16">
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
        className="mx-auto h-16 w-16 md:h-20 md:w-20 text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 mb-4"
      >
        <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
        <path d="M16 8V5c0-1.1.9-2 2-2" />
        <path d="M12 13h4" />
        <path d="M12 18h6a2 2 0 0 1 2 2v1" />
        <path d="M12 8h8" />
        <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
        <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
        <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
        <path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
      </svg>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
        Explore{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
          CINE AI
        </span>{' '}
        Music Tools
      </h3>
      <p className="text-md md:text-lg text-gray-400 max-w-2xl mx-auto">
        Dive into AI-powered music generation, artwork creation, and strategic distribution insights. Unleash your creativity with CINECMS.
      </p>
    </div>
    <div className="max-w-md mx-auto text-center">
      <a href="/cine-ai">
        <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 px-8 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-700 text-white text-base md:text-lg py-3 rounded-md shadow-lg hover:shadow-xl transition-all transform hover:scale-102">
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
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
          Discover AI Music Generation
        </button>
      </a>
      <p className="text-sm text-gray-500 mt-3">
        Click to explore AI music creation and more on our dedicated CINE AI page.
      </p>
    </div>
  </div>
</div>

        </section>
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 relative z-10 overflow-hidden">
            <div
  className="absolute top-1/4 left-20 w-72 h-72 bg-sky-600/30 rounded-full filter blur-3xl opacity-50 animate-pulse"
  style={{ transform: 'scale(1.08136) translateZ(0px)' }}
></div>
<div
  className="absolute bottom-1/4 right-20 w-80 h-80 bg-pink-500/30 rounded-full filter blur-3xl opacity-50 animate-pulse"
  style={{ transform: 'scale(1.08507) translateZ(0px)' }}
></div>
 {/* Heading with gradient span */}
<div className="container mx-auto px-4 md:px-8 relative z-20">
  <div style={{ opacity: 1, transform: 'none' }}>
    <div className="text-center mb-12 md:mb-16">
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
        className="mx-auto h-16 w-16 md:h-20 md:w-20 text-transparent bg-clip-text bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-500 mb-4"
      >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
        AI-Powered{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
          Distribution Insights
        </span>
      </h3>
      <p className="text-md md:text-lg text-gray-400 max-w-2xl mx-auto">
        Leverage AI for strategic planning. Get insights on reaching your target audience, optimizing release schedules, and more.
      </p>
    </div>
    <div className="max-w-md mx-auto text-center">
      <a href="/cine-ai">
        <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 px-8 w-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 hover:from-sky-600 hover:via-indigo-600 hover:to-purple-700 text-white text-base md:text-lg py-3 rounded-md shadow-lg hover:shadow-xl transition-all transform hover:scale-102">
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
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
          </svg>
          Explore AI Strategy Tools
        </button>
      </a>
      <p className="text-sm text-gray-500 mt-3">
        Visit our CINE AI page to see how AI can shape your music distribution.
      </p>
    </div>
  </div>
</div>

        </section>
        <section className="py-16 md:py-24 bg-slate-900/50 backdrop-blur-md relative z-10 overflow-hidden">
        <div className="absolute inset-0 -z-10">
  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-600/10 to-transparent"></div>
  <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-pink-600/10 to-transparent"></div>
</div>

         <div className="container mx-auto px-4 md:px-8">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div style={{ opacity: 1, transform: 'none' }}>
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        Launch Your Own{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Whitelabel CMS
        </span>
      </h3>
      <p className="text-md md:text-lg text-gray-300 mb-6">
        Offer our powerful, AI-driven music distribution platform under your own brand. We provide the
        technology, you focus on your clients. Our whitelabel solution is perfect for labels, distributors,
        and music businesses looking to scale.
      </p>
      <button
        className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group"
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
          className="mr-2 h-5 w-5 transition-transform group-hover:-rotate-12"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
        </svg>
        Apply Now
      </button>
    </div>
    <div style={{ opacity: 1, transform: 'none' }}>
      <div className="relative p-8 bg-slate-800/50 border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-900/30 backdrop-blur-lg">
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
          className="absolute top-4 right-4 h-8 w-8 text-purple-400 opacity-50"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
          <path d="M5 3v4"></path>
          <path d="M19 17v4"></path>
          <path d="M3 5h4"></path>
          <path d="M17 19h4"></path>
        </svg>
        <img
          src="/path-to-your-image.jpg" // Replace with actual image path
          alt="Modern CMS dashboard interface showing analytics and charts on a dark background"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</div>

        </section>
         <section
      id="pricing"
      className="py-16 md:py-24 bg-slate-800/50 backdrop-blur-md relative z-10 text-center"
    >
      {/* Heading */}
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
        {pricingData.heading}{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
          {pricingData.gradientHeading}
        </span>
      </h3>

      {/* Description */}
      <p className="text-md md:text-lg text-gray-300 text-center mb-12 md:mb-16 max-w-3xl mx-auto font-semibold">
        {pricingData.description}
      </p>

      {/* Cards */}
      <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingData.cards.map((card) => (
          <div key={card.title} className={card.styles}>
            {card.badge && <div className={card.badge.styles}>{card.badge.text}</div>}

            {/* Title & Percentage */}
            <div className="flex flex-col items-start mb-4">
              <h4 className={`text-2xl md:text-3xl font-bold ${card.titleColor}`}>{card.title}</h4>
              <p className={`text-4xl md:text-5xl font-extrabold mb-2 ${card.percentageColor}`}>
                {card.percentage}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-6 text-sm">{card.description}</p>

            {/* Features */}
            <ul className="space-y-2 mb-8 text-gray-300 text-sm md:text-base">
              {card.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1 h-5 w-5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <a href={card.button.href} className="w-full block mt-auto">
              <button className={card.buttonStyles}>{card.button.text}</button>
            </a>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-gray-100 max-w-3xl mx-auto mt-6 mb-12 text-l">{pricingData.footer}</p>
    </section>
        <section className="py-16 md:py-24 relative z-10 overflow-hidden">

 <div className="container mx-auto px-4 md:px-8 text-center">
  <div style={{ opacity: 1, transform: 'none' }}>
    <img
      src="/path-to-your-image.jpg" // Replace this with your actual image path or import
      alt="Energetic DJ performing at a vibrant music festival with atmospheric lighting and crowd"
      className="w-full max-w-5xl mx-auto rounded-xl shadow-2xl mb-10 md:mb-12 opacity-80"
    />
    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6">
      Ready to Make Waves with{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500">
        CINECMS
      </span>
      ?
    </h3>
    <p className="text-md md:text-lg text-gray-300 max-w-xl mx-auto mb-8 md:mb-10">
      Join the community of successful independent artists. Your next hit is waiting to be heard.
    </p>
    <a href="/signup">
      <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-11 bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 hover:from-green-500 hover:to-cyan-600 text-white px-10 py-4 md:px-12 md:py-5 text-lg md:text-xl rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
        Launch Your Music Now
      </button>
    </a>
  </div>
</div>

        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
