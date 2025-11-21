import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Press  ()  {
  return (
    <>
      <Header />
      <div className="bg-slate-900">
        <main className="flex-grow pt-24 md:pt-32">
          <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Latest News &amp; Updates
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-12 text-center">
              Your source for official announcements, feature updates, and
              industry insights from the CINECMS team.
            </p>
            {/* <div className='text-center py-16'>
                    <h2 className="text-2xl font-bold text-gray-400">No press releases found.</h2>
                    <p className="text-gray-500 mt-2">Check back soon for the latest updates!</p>
                </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div style={{ opacity: 1, transform: "none" }}>
  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col group" style={{ transform: "none" }}>
    
    {/* Image */}
    <div className="w-full h-56 overflow-hidden">
      <img
        src="https://horizons-cdn.hostinger.com/8f5cf60f-f1cb-451f-8996-7971468e9644/27635eefe6c7ca88e9d0c723139caafb.jpg"
        alt="CINECMS Named Top Worldwide Music Distributor in Annual Industry Report"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-white mb-3">
        CINECMS Named Top Worldwide Music Distributor in Annual Industry Report
      </h3>

      {/* Meta Info */}
      <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
        
        {/* Date */}
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
            className="h-4 w-4 mr-2"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>August 13, 2025</span>
        </div>

        {/* Author */}
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
            className="h-4 w-4 mr-2"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>CINECMS</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed flex-grow mb-6">
        NEW YORK, NY – CINECMS, a global leader in digital music and video distribution,
        has been named the top worldwide music distributor in the 2025 Annual...
      </p>

      {/* Read More Button */}
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 p-0 text-purple-400 hover:text-purple-300 self-start">
        Read More
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
          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</div>

             <div style={{ opacity: 1, transform: "none" }}>
  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col group">
    
    {/* Image Section */}
    <div className="w-full h-56 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80"
        alt="CINECMS Launches AI-Powered Toolkit for Independent Artists"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    {/* Content Section */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-white mb-3">
        CINECMS Launches AI-Powered Toolkit for Independent Artists
      </h3>

      {/* Meta Info */}
      <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
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
            className="h-4 w-4 mr-2"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <span>July 28, 2025</span>
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
            className="h-4 w-4 mr-2"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>CINECMS</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed flex-grow mb-6">
        CINECMS today announced the launch of its groundbreaking AI-powered toolkit,
        designed to empower independent artists with data-driven insights for mar...
      </p>

      {/* Button */}
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 p-0 text-purple-400 hover:text-purple-300 self-start">
        Read More
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
          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</div>

              <div style={{ opacity: 1, transform: "none" }}>
  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col group">
    
    {/* Image Section */}
    <div className="w-full h-56 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80"
        alt="The Future of Music Distribution: CINECMS on Navigating a Post-Streaming World"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    {/* Content Section */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-white mb-3">
        The Future of Music Distribution: CINECMS on Navigating a Post-Streaming World
      </h3>

      {/* Meta Info */}
      <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
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
            className="h-4 w-4 mr-2"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <span>July 15, 2025</span>
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
            className="h-4 w-4 mr-2"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>CINECMS</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed flex-grow mb-6">
        In a rapidly evolving music industry, CINECMS is leading the charge with innovative strategies for artists and labels. This article explores how our p...
      </p>

      {/* Button */}
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 p-0 text-purple-400 hover:text-purple-300 self-start">
        Read More
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
          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</div>  

          <div style={{ opacity: 1, transform: "none" }}>
  <div
    className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col group"
    style={{ transform: "none" }}
  >
    <div className="w-full h-56 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80"
        alt="Maximizing Royalties: How CINECMS is Simplifying Royalty Collection for Labels"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-white mb-3">
        Maximizing Royalties: How CINECMS is Simplifying Royalty Collection for Labels
      </h3>

      <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
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
            className="h-4 w-4 mr-2"
          >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <span>June 30, 2025</span>
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
            className="h-4 w-4 mr-2"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>CINECMS</span>
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed flex-grow mb-6">
        CINECMS is proud to unveil its enhanced royalty collection and accounting system, providing unprecedented transparency and efficiency for independent ...
      </p>

      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 p-0 text-purple-400 hover:text-purple-300 self-start">
        Read More
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
          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
    </div>
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

export default Press
