import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductCatalog from '../components/Products/ProductCatalog'

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-300'>  
      <Navbar />
      <Hero />
      <ProductCatalog />
    </div>
  )
}

export default Home 
