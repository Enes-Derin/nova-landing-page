import React from 'react'

import Navbar from '../components/Navbar';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Navbar />
            <Features />
            <ProductShowcase />
            <Pricing />
            <Footer />
        </div >

    )
}

export default Home
