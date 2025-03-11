import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { FaBars } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import { RiUserLine } from 'react-icons/ri';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="max-w-[1440px] mx-auto w-full flex items-center justify-between py-4 px-6">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Link to="/" className="font-bold text-lg sm:text-xl text-gray-900">
          Mobile Mart
        </Link>
      </div>

      {/* Navbar Section */}
      <div className="flex-1 flex justify-center">
        <Navbar
          containerStyles={`${
            menuOpen
              ? "flex items-start flex-col gap-y-4 fixed top-16 right-6 p-3 bg-white rounded-xl shadow-md w-48 ring-1 ring-slate-900/5 z-50 text-sm"
              : "hidden xl:flex gap-x-5 xl:gap-x-7 medium-15 ring-1 ring-slate-900/5 rounded-full p-1 bg-gray-50 text-sm"
          }`}
          onClick={() => setMenuOpen(false)}
        />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-x-3 sm:gap-x-4">
        {/* Toggle Menu Button (Placed before the Cart) */}
        <div className="xl:hidden">
          {menuOpen ? (
            <FaBarsStaggered onClick={toggleMenu} className="cursor-pointer text-lg sm:text-xl" />
          ) : (
            <FaBars onClick={toggleMenu} className="cursor-pointer text-lg sm:text-xl" />
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative flex items-center px-3 sm:px-4 py-2 ring-1 ring-gray-900 rounded-full text-xs sm:text-sm font-semibold">
          Cart
          <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 bg-black text-white text-[10px] font-bold rounded-full">
            0
          </span>
        </Link>

        {/* Login Button */}
        <button className="flex items-center gap-x-2 px-3 sm:px-4 py-2 rounded-full bg-black text-white font-semibold text-xs sm:text-sm">
          Login
          <RiUserLine className="text-lg sm:text-xl" />
        </button>
      </div>
    </header>
  );
}
