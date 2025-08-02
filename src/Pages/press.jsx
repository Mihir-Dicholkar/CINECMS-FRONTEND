import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Press  ()  {
  return (
    <>
    <Header/>
    <div className='bg-slate-900'>
        <main className='flex-grow pt-24 md:pt-32'>
            <section className='container mx-auto px-4 md:px-8 py-16 md:py-24'>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" >Latest News &amp; Updates</h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-12 text-center" >Your source for official announcements, feature updates, and industry insights from the CINECMS team.</p>
                <div className='text-center py-16'>
                    <h2 className="text-2xl font-bold text-gray-400">No press releases found.</h2>
                    <p className="text-gray-500 mt-2">Check back soon for the latest updates!</p>
                </div>
            </section>

        </main>
    </div>
    <Footer/>
    </>
  )
}

export default Press
