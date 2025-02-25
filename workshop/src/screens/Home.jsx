import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductCatalog from '../components/Products/ProductCatalog'
import ScrollButton from '../components/ScrollButton'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#a5cfde] to-[#52bcdf]'>
      <ScrollButton />
      <Navbar />
      <Hero />
      <ProductCatalog />
      <Footer />
    </div>
  )
}

export default Home 
