import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 px-6">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
              {/* Logo Section */}
              <div className="flex-shrink-0">
                <Link to="/" className="font-bold text-xl text-gray-100">
                  Mobile Mart
                </Link>
                <p className="mt-2 text-sm text-gray-400">Your one-stop mobile shop</p>
              </div>
    
              {/* Quick Links Section */}
              <div>
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <ul className="mt-4 space-y-2">
                  <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                  <li><Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                  <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                </ul>
              </div>
    
              {/* Contact Section */}
              <div>
                <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                <ul className="mt-4 text-gray-400">
                  <li>Email: <a href="mailto:support@mobilemart.com" className="hover:text-white">support@mobilemart.com</a></li>
                  <li>Phone: <a href="tel:+123456789" className="hover:text-white">+123 456 789</a></li>
                  <li>Address: 123 Mobile St, City, Country</li>
                </ul>
              </div>
    
              {/* Social Media Section */}
              <div>
                <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                <div className="mt-4 flex space-x-4">
                  <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
    
            {/* Bottom Section */}
            <div className="mt-8 border-t border-gray-600 pt-4 text-center text-gray-400">
              <p>&copy; 2025 Mobile Mart. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      );
}
