import React from "react";
import welcomePng from "../assets/bg.png";
import welcomePng1 from "../assets/image.png";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6">
      {/* Background Image Container */}
      <div
        className="relative h-[600px] rounded-3xl overflow-hidden bg-cover bg-center flex items-end p-6 md:p-10"
        style={{ backgroundImage: `url(${welcomePng})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Text Content */}
        <div className="relative text-white max-w-xs">
          <p className="text-sm md:text-lg">
            Explore our curated collection, find exclusive deals, and enjoy a seamless shopping journey.
          </p>
          <button className="mt-4 px-5 py-2 bg-white text-black rounded-full font-medium flex items-center gap-2 shadow-md hover:bg-gray-200 transition">
            Explore more
          </button>
        </div>

        {/* Floating Product Card */}
        <div className="absolute top-8 right-8 bg-white rounded-2xl shadow-xl w-48 md:w-56 p-3 hidden md:block">
          <img src={welcomePng} alt="Product" className="rounded-xl" />
          <button className="mt-2 w-full py-1 flex justify-center items-center gap-2 text-gray-800 font-medium hover:text-black transition">
            Explore this product <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
}
