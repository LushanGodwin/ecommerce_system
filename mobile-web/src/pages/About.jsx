import React from 'react';
import { Link } from 'react-router-dom';
import aboutus from '../assets/aboutUs.jpg';

export default function About() {
  return (
    <div>
      {/* Header Section with Background Image */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${aboutus})` }} // Replace with your actual background image URL
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="z-10">
          <h1 className="text-3xl sm:text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg sm:text-xl">We are a trusted mobile shop providing quality products and services.</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 px-6 sm:px-12">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Who We Are</h2>
          <p className="mt-4 text-lg text-gray-600">
            At Mobile Mart, we are passionate about providing high-quality mobile devices and accessories to our customers. Our goal is to offer a seamless shopping experience, with a wide range of products that meet the needs of every mobile user.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Our Mission</h3>
              <p className="mt-4 text-gray-600">
                Our mission is to provide customers with the best mobile devices, accessories, and exceptional customer service. We aim to stay ahead of the curve by offering the latest technology at affordable prices.
              </p>
            </div>

            {/* Our Values */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Our Values</h3>
              <p className="mt-4 text-gray-600">
                We value integrity, customer satisfaction, and innovation. Every interaction with our customers is an opportunity to build trust and make sure that we offer the best experience possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <p>&copy; 2025 Mobile Mart. All Rights Reserved.</p>
          <div className="mt-4">
            <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
