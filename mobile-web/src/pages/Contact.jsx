import React from 'react'
import { Link } from 'react-router-dom';
import contact from '../assets/contact.jpg';

function Contact ()  {
  return (
    <div>
      {/* Header Section with Background Image */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${contact})` }} // Replace with your actual background image URL
      >
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="z-10">
          <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg sm:text-xl">Get in touch with us for any inquiries or assistance.</p>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-12 px-6 sm:px-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800">We'd Love to Hear From You</h2>
          <p className="mt-4 text-lg text-center text-gray-600">Feel free to reach out to us using the form below or by contacting us directly.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-800 font-semibold">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-800 font-semibold">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-800 font-semibold">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Your message"
                    className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Our Contact Information</h3>
              <ul className="mt-6 text-gray-600">
                <li className="flex items-center mb-4">
                  <span className="mr-2 text-blue-600">&#x1F4E7;</span>
                  <a href="mailto:support@mobilemart.com" className="text-blue-600 hover:underline">
                    support@mobilemart.com
                  </a>
                </li>
                <li className="flex items-center mb-4">
                  <span className="mr-2 text-blue-600">&#128222;</span>
                  <a href="tel:+123456789" className="text-blue-600 hover:underline">
                    +123 456 789
                  </a>
                </li>
                <li className="flex items-center mb-4">
                  <span className="mr-2 text-blue-600">&#127968;</span>
                  123 Mobile St, City, Country
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <p>&copy; 2025 Mobile Mart. All Rights Reserved.</p>
          <div className="mt-4">
            <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;




