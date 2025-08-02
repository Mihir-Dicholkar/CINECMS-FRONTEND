import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function CineAi  ()  {
  return (
  <>

  <div className='min-h-screen bg-slate-900 text-white flex flex-col overflow-x-hidden'>
      <Header/>

  <main className='flex-grow mt-20 container mx-auto px-4 md:px-8 py-12 md:py-16'>
    <div className='text-center mb-12 md:mb-20'>
      <h1 class="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">The Future of Music, <span class="bg-clip-text text-transparent bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">Powered by CINE AI</span></h1>
      <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Explore cutting-edge AI tools designed to revolutionize how you create, distribute, and strategize your music career.</p>
    </div>
    <section className='mb-12 md:mb-20'>
      <div className='text-center mb-10 md:mb-12'>
        <h2 class="text-3xl md:text-4xl font-bold mb-3">AI-Enhanced <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500">Distribution Fields</span></h2>
        <p class="text-md md:text-lg text-gray-400 max-w-2xl mx-auto">Discover how AI streamlines and optimizes every step of your music distribution process.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          <div className='bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-cyan-500/70 transition-colors duration-300'>
          <h4 class="text-xl font-semibold mb-2 text-gray-100">Automated Metadata Tagging</h4>
          <p class="text-sm text-gray-400">AI analyzes your audio to suggest and auto-fill crucial metadata like genre, mood, and instrumentation, ensuring accuracy and saving you time.</p>
        </div>
          <div className='bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-cyan-500/70 transition-colors duration-300'>
          <h4 class="text-xl font-semibold mb-2 text-gray-100">Genre & Mood Classification</h4>
          <p class="text-sm text-gray-400">Sophisticated AI algorithms classify your tracks into precise genres and sub-genres, and identify nuanced moods for better playlist targeting..</p>
        </div>
          <div className='bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-cyan-500/70 transition-colors duration-300'>
          <h4 class="text-xl font-semibold mb-2 text-gray-100">Predictive Performance Analytics</h4>
          <p class="text-sm text-gray-400">Leverage AI to forecast potential track performance on various platforms, helping you make informed decisions about your release strategy.</p>
        </div>
          <div className='bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-cyan-500/70 transition-colors duration-300'>
          <h4 class="text-xl font-semibold mb-2 text-gray-100">Smart Release Scheduling</h4>
          <p class="text-sm text-gray-400">AI analyzes market trends, listener activity, and competitor releases to suggest optimal release dates and times for maximum impact.AI analyzes your audio to suggest and auto-fill crucial metadata like genre, mood, and instrumentation, ensuring accuracy and saving you time.</p>
        </div>
          <div className='bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 hover:border-cyan-500/70 transition-colors duration-300'>
          <h4 class="text-xl font-semibold mb-2 text-gray-100">AI-Enhanced Lyric Services</h4>
          <p class="text-sm text-gray-400">Conceptual AI tools for lyric alignment with audio, automated translation to multiple languages, and sentiment analysis of lyrical content.</p>
        </div>
        </div>
        </section>
  </main>
  <Footer/>
  </div>
  </>
  )
}

export default CineAi
