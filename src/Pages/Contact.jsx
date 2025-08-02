import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignIn,
  faChevronDown,
  faChevronUp,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/main-logo.png"; // Adjust the path to your logo image
import {
  faBookOpen,
  faBoltLightning,
  faTags,
  faClock,
  faEnvelope,
  faPhone,
  faLocation,
  faRobot,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import Footer from "../Components/Footer";
function Contact() {
  const navItems = [
    { label: "Features", to: "/#features" }, // scrolls to #features
    { label: "How it works", hash: "how-it-works" }, // scrolls to #how-it-works
    { label: "Publishings", to: "/publishings", icon: faBookOpen }, // navigates to /publishings
    { label: "Cine-AI", to: "/cine-ai", icon: faBoltLightning }, // navigates to /cine-ai
    { label: "Pricing", hash: "pricing", icon: faTags }, // scrolls to #pricing
    { label: "Contact", to: "/contact" }, // scrolls to #contact
  ];

  const faqItems = [
    {
      question: "How do I release my music with CINECMS?",
      answer:
        "To release your music, simply sign up for an account, navigate to the 'Release' section, and follow the step-by-step instructions to upload your audio, artwork, and metadata. Our platform will guide you through the entire process.",
    },
    {
      question: "What are the fees for music distribution?",
      answer:
        "We offer various pricing plans to suit different needs, including options with zero upfront fees. Please visit our 'Pricing' section for a detailed breakdown of our plans and features.",
    },
    {
      question: "How long does it take for my music to go live?",
      answer:
        "Typically, it takes 2-5 business days for your music to be reviewed and delivered to major platforms like Spotify and Apple Music. Some stores may take a bit longer. We recommend submitting your release at least 2-3 weeks before your desired release date.",
    },
    {
      question: "How do I get paid?",
      answer:
        "Revenue is collected from the stores and credited to your CINECMS account. You can view detailed earning reports in the 'Revenue' section and request a payout once you meet the minimum threshold.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 bg-slate-700/100 z-50">
        <header className="md:flex items-center justify-between py-4 px-8">
          {/* Left: Rotating Logo */}
          <div className="flex items-center gap-3">
            {/* Rotating logo with fixed image inside */}
            <div className="relative w-14 h-14 flex-shrink-0">
              {/* Fixed image inside */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-12 h-12 rounded-full object-cover"
                />
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
                      {item.icon && (
                        <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
                      )}
                      {item.label}
                    </span>
                  </LinkComponent>
                </li>
              );
            })}
          </ul>

          {/* Right: Login & Signup Buttons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl hover:scale-105 transform transition duration-300 shadow-lg">
              <FontAwesomeIcon icon={faSignIn} />
              Login
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-indigo-500 text-indigo-500 rounded-2xl hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-md hover:scale-105">
              <FontAwesomeIcon icon={faUserPlus} />
              Sign Up
            </button>
          </div>
        </header>
      </div>
      <main className="flex-grow bg-black px-9 pt-28 md:pt-32">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4 md:px-8 py-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center tracking-tight text-cyan-400">
            Worldwide Music, Video &amp; Movie Distribution
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 text-center">
            Empowering Independent Artists and Labels with AI-Powered
            Strategies, Cutting-Edge Technology, and Robust Royalty Collection.
          </p>
        </motion.section>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/60 mb-5 border border-slate-700/50 shadow-2xl shadow-black/30 backdrop-blur-xl p-8 rounded-2xl md:col-span-2">
              <h3 className="text-2xl font-semibold mb-6 text-pink-400 flex items-center">
                {" "}
                Send Us a Message
              </h3>
              <form action="" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="flex h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-slate-800/80 border-slate-700 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 rounded-md p-3"
                      name="name"
                      id="name"
                      required=""
                      placeholder="Your Name"
                      value=""
                    ></input>
                  </div>
                  <div>
                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="flex h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-slate-800/80 border-slate-700 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 rounded-md p-3"
                      name="email"
                      id="email"
                      required=""
                      placeholder="you@example.com"
                      value=""
                    />
                  </div>
                  <div>
                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300 mb-1">
                      Department
                    </label>
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:r0:"
                      aria-expanded="false"
                      aria-autocomplete="none"
                      dir="ltr"
                      data-state="closed"
                      data-placeholder=""
                      className="flex h-10 items-center justify-between border text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-slate-800/80 border-slate-700 focus:ring-pink-500 focus:border-pink-500 rounded-md p-3"
                    >
                      <span>Select a department...</span>
                    </button>
                    <select aria-hidden="true" name="department">
                      <option value="support">General Support</option>
                      <option value="sales">Sales &amp; Partnerships</option>
                      <option value="billing">Billing &amp; Revenue</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="flex h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-slate-800/80 border-slate-700 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 rounded-md p-3"
                    name="subject"
                    id="subject"
                    required=""
                    placeholder="Regarding..."
                    value=""
                  />
                </div>
                <div>
                  <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    className="flex min-h-[80px] border text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-slate-800/80 border-slate-700 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 rounded-md p-3"
                    name="message"
                    id="message"
                    rows="5"
                    required=""
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div>
                  <button
                    className="inline-flex items-center justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-6 text-lg rounded-md transition-transform transform hover:scale-105"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <div className="md:col-span-2">
                <div className="bg-slate-900/60 border my-6 border-slate-700/50 shadow-2xl shadow-black/30 backdrop-blur-xl p-6 rounded-2xl h-full flex flex-col">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center">
                    <FontAwesomeIcon
                      icon={faWandMagicSparkles}
                      className="mr-3 text-2xl text-purple-400"
                    />
                    AI Assistant
                  </h3>
                  <div className="flex-grow bg-slate-800/50 rounded-lg p-4 space-y-4 overflow-y-auto h-64 max-h-96">
                    <div className="flex items-start gap-3 max-w-[85%] mr-auto">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-purple-500">
                        <FontAwesomeIcon
                          icon={faRobot}
                          className="text-xl text-white"
                        />{" "}
                      </div>
                      <div className="p-3 rounded-lg text-sm bg-slate-700">
                        Hello! I'm the CINE AI Assistant. I can help answer
                        common questions. How can I assist you today?
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      <button className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background px-4 text-xs h-auto py-2 border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-purple-200">
                        How do I release music?
                      </button>
                      <button className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background px-4 text-xs h-auto py-2 border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-purple-200">
                        How do I get paid?
                      </button>
                      <button className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background px-4 text-xs h-auto py-2 border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-purple-200">
                        How to create a support ticket?
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-slate-900/60 border border-slate-700/50 shadow-2xl shadow-black/30 backdrop-blur-xl p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-sky-400">
                Contact Information
              </h3>
              <ul className="space-y-5 text-gray-300">
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-2xl text-sky-400 mr-4 mt-1 flex-shrink-0"
                  />
                  <div>
                    <span class="font-semibold">Email:</span> <br />{" "}
                    <a
                      href="mailto:support@cinecms.com"
                      className="hover:text-sky-300 transition-colors"
                    >
                      support@cinecms.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-2xl text-sky-400 mr-4 mt-1 flex-shrink-0"
                  />
                  <div>
                    <span class="font-semibold">Phone:</span> <br />{" "}
                    <a
                      href="mailto:support@cinecms.com"
                      className="hover:text-sky-300 transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-2xl text-sky-400 mr-4 mt-1 flex-shrink-0"
                  />
                  <div>
                    <span class="font-semibold">Hours:</span> <br />{" "}
                    <a
                      href="mailto:support@cinecms.com"
                      className="hover:text-sky-300 transition-colors"
                    >
                      Mon-Fri, 9am-5pm EST
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <FontAwesomeIcon
                    icon={faLocation}
                    className="text-2xl text-sky-400 mr-4 mt-1 flex-shrink-0"
                  />
                  <div>
                    <span class="font-semibold">Address:</span> <br />{" "}
                    <a
                      href="mailto:support@cinecms.com"
                      className="hover:text-sky-300 transition-colors"
                    >
                      123 Music Lane, Suite 100 Nashville, TN 37203, USA
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/60 border border-slate-700/50 shadow-2xl shadow-black/30 backdrop-blur-xl p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-green-400">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-slate-700 rounded-lg"
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full text-left px-4 py-4 flex justify-between items-center text-white font-medium focus:outline-none"
                    >
                      {faq.question}
                      <FontAwesomeIcon
                        icon={openIndex === index ? faChevronUp : faChevronDown}
                        className="ml-2 text-green-400"
                      />
                    </button>

                    <div
                      className={`px-4 pb-4 text-gray-300 text-sm transition-all duration-300 ease-in-out ${
                        openIndex === index
                          ? "max-h-screen opacity-100"
                          : "max-h-0 overflow-hidden opacity-0"
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
