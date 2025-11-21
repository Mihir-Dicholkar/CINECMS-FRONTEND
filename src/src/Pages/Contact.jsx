import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronDown } from "lucide-react"; 
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
import Header from "../Components/Header";
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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="min-h-screen relative overflow-hidden bg-slate-900 text-white flex flex-col">
        <div
  className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(192,132,252,0.3),_transparent_40%)] -z-10 filter blur-3xl"
  style={{
    opacity: 0,
    top: '20%',
    left: '30%',
    transform: 'translateX(-50%) translateY(-50%) scale(0.867232) translateZ(0px)',
  }}
></div>
<div
  className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.2),_transparent_50%)] -z-10 filter blur-3xl"
  style={{
    opacity: 0,
    top: '80%',
    left: '70%',
    transform: 'translateX(-50%) translateY(-50%) scale(0.99999) translateZ(0px)',
  }}
></div>
<Header/>
        <main className="flex-grow pt-28 md:pt-32">
          <section className="container mx-auto px-4 md:px-8 py-12" style={{opacity: 1, transform: 'none'}}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center tracking-tight text-cyan-400">Worldwide Music, Video &amp; Movie Distribution</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 text-center">Empowering Independent Artists and Labels with AI-Powered Strategies, Cutting-Edge Technology, and Robust Royalty Collection.</p>
         <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-900/60 border border-slate-700/50 shadow-2xl shadow-black/30 backdrop-blur-xl p-8 rounded-2xl" style={{ opacity: 1, transform: 'none' }}>
  <h3 className="text-2xl font-semibold mb-6 text-pink-400 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
      <path d="m22 2-7 20-4-9-9-4Z"></path>
      <path d="M22 2 11 13"></path>
    </svg>
    Send Us a Message
  </h3>
  <form className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="name" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your Name"
          value=""
          className="flex h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-slate-800/80 border-slate-700 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 rounded-md p-3"
        />
      </div>
      <div>
        <label htmlFor="email" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@example.com"
          value=""
          className="flex h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-slate-800/80 border-slate-700 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 rounded-md p-3"
        />
      </div>
      <div>
        <label htmlFor="phone" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+1 (555) 123-4567"
          value=""
          className="flex h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-slate-800/80 border-slate-700 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 rounded-md p-3"
        />
      </div>
      <div>
        <label htmlFor="company" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300 mb-1">
          Company / Label (Optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Your Record Label"
          value=""
          className="flex h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-slate-800/80 border-slate-700 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 rounded-md p-3"
        />
      </div>
    </div>

    <div>
      <label htmlFor="musicLink" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300 mb-1">
        Link to Your Music (Optional)
      </label>
      <input
        type="url"
        id="musicLink"
        name="musicLink"
        placeholder="https://spotify.link/your-artist-profile"
        value=""
        className="flex h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-slate-800/80 border-slate-700 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 rounded-md p-3"
      />
    </div>

    <div>
      <label htmlFor="department" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300 mb-1">
        Department
      </label>
      <button
        type="button"
        role="combobox"
        aria-controls="radix-:rq:"
        aria-expanded="false"
        aria-autocomplete="none"
        dir="ltr"
        data-state="closed"
        data-placeholder=""
        className="flex h-10 items-center justify-between border text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-slate-800/80 border-slate-700 focus:ring-pink-500 focus:border-pink-500 rounded-md p-3"
      >
        <span style={{ pointerEvents: 'none' }}>Select a department...</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 opacity-50" aria-hidden="true" viewBox="0 0 24 24">
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
      <select
        aria-hidden="true"
        tabIndex={-1}
        name="department"
        style={{
          position: 'absolute',
          border: 0,
          width: '1px',
          height: '1px',
          padding: 0,
          margin: -1,
          overflow: 'hidden',
          clip: 'rect(0px, 0px, 0px, 0px)',
          whiteSpace: 'nowrap',
          overflowWrap: 'normal',
        }}
      >
        <option value="support">General SupportFor technical issues, platform questions, or general inquiries.</option>
        <option value="sales">Sales &amp; PartnershipsInterested in our whitelabel solutions or have a business proposal?</option>
        <option value="billing">Billing &amp; RevenueFor all questions regarding payments, royalties, and financial statements.</option>
      </select>
    </div>

    <div>
      <label htmlFor="subject" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300 mb-1">
        Subject
      </label>
      <input
        type="text"
        id="subject"
        name="subject"
        required
        placeholder="Regarding..."
        value=""
        className="flex h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-slate-800/80 border-slate-700 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 rounded-md p-3"
      />
    </div>

    <div>
      <label htmlFor="message" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-gray-300 mb-1">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={6}
        required
        placeholder="Your message here..."
        className="flex min-h-[80px] border text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-slate-800/80 border-slate-700 placeholder-gray-500 focus:ring-pink-500 focus:border-pink-500 rounded-md p-3"
      ></textarea>
    </div>

    <div>
      <button
        type="submit"
        className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-6 text-lg rounded-md transition-transform transform hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5" viewBox="0 0 24 24">
          <path d="m22 2-7 20-4-9-9-4Z"></path>
          <path d="M22 2 11 13"></path>
        </svg>
        Send Message
      </button>
    </div>
  </form>
</div>
<div className="space-y-8">
  <div className="h-full" style={{ opacity: 1, transform: "none" }}>
  <div className="bg-slate-900/60 border border-slate-700/50 shadow-2xl shadow-black/30 backdrop-blur-xl p-6 rounded-2xl h-full flex flex-col">
    <h3 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-3 text-purple-400"
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
      </svg>
      AI Assistant
    </h3>
    <div className="flex-grow bg-slate-800/50 rounded-lg p-4 space-y-4 overflow-y-auto h-64 max-h-96">
      <div className="flex items-start gap-3 max-w-[85%] mr-auto" style={{ opacity: 1, transform: "none" }}>
        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-purple-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bot"
          >
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
          </svg>
        </div>
        <div className="p-3 rounded-lg text-sm bg-slate-700">
          Hello! I'm the CINE AI Assistant. I can help answer common questions. How can I assist you today?
        </div>
      </div>
    </div>
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2" style={{ opacity: 1, transform: "none" }}>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background px-4 text-xs h-auto py-2 border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-purple-200">
          How do I release music?
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background px-4 text-xs h-auto py-2 border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-purple-200">
          How do I get paid?
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background px-4 text-xs h-auto py-2 border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-purple-200">
          How to create a support ticket?
        </button>
      </div>
    </div>
  </div>
</div>
<div
  className="bg-slate-900/60 border border-slate-700/50 shadow-2xl shadow-black/30 backdrop-blur-xl p-8 rounded-2xl"
  style={{ opacity: 1, transform: "none" }}
>
  <h3 className="text-2xl font-semibold mb-6 text-sky-400">Contact Information</h3>
  <ul className="space-y-5 text-gray-300">
    <li className="flex items-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-sky-400 mr-4 mt-1 flex-shrink-0"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
      <div>
        <span className="font-semibold">Email:</span>
        <br />
        <a href="mailto:support@cinecms.com" className="hover:text-sky-300 transition-colors">
          support@cinecms.com
        </a>
      </div>
    </li>
    <li className="flex items-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-sky-400 mr-4 mt-1 flex-shrink-0"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      <div>
        <span className="font-semibold">Phone:</span>
        <br />
        <a href="tel:+1234567890" className="hover:text-sky-300 transition-colors">
          +1 (234) 567-890
        </a>
      </div>
    </li>
    <li className="flex items-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-sky-400 mr-4 mt-1 flex-shrink-0"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
      <div>
        <span className="font-semibold">Hours:</span>
        <br />
        Mon-Fri, 9am-5pm EST
      </div>
    </li>
    <li className="flex items-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-sky-400 mr-4 mt-1 flex-shrink-0"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      <div>
        <span className="font-semibold">Address:</span>
        <br />
        123 Music Lane, Suite 100
        <br />
        Nashville, TN 37203, USA
      </div>
    </li>
  </ul>
</div>
  <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="bg-slate-900/60 border border-slate-700/50 shadow-2xl shadow-black/30 backdrop-blur-xl p-8 rounded-2xl"
    >
      <h3 className="text-2xl font-semibold mb-6 text-green-400">
        Frequently Asked Questions
      </h3>

      <div className="w-full space-y-3">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-slate-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 text-left text-gray-200 hover:bg-slate-800/40 transition"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-green-400" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
              }`}
            >
              <p className="text-gray-400">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>

</div>
         </div>
          </section>
        </main>
      </div>
     
      <Footer />
    </>
  );
}

export default Contact;
