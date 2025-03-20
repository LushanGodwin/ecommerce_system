import React from 'react'
import Hero from '../components/Hero';
import Features from '../components/Features';
import NewArrivals from '../components/NewArrivals';
import PopularProducts from '../components/PopularProducts';
import About from '../components/About';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <NewArrivals />
      <PopularProducts />
      <About />
      <Footer />
    </>
  );
};

export default Home;

