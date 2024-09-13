import React from 'react'
import { Link } from 'react-router-dom'

// colors yelo: FCA311, blue: 14213D, black: 000000, white E5E5E5

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-300 to-green-300 text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-white mb-4">Inkling: Your AI Writing Assistant</h1>
          <p className="text-xl text-white mb-8">Write with ease and precision</p>
          
          <Link to="/editor" className="bg-orange-400 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-orange-300 transition duration-300">Get Started</Link>
        </div>
      </section>
      

    </div>
  )
}

export default Home