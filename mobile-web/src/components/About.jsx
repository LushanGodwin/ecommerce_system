import React from "react";
import Title from "./Title";
import testimonial from "../assets/imotional.png";
import about from "../assets/about.png";
import { RiAdminLine, RiSecurePaymentLine, RiSoundModuleLine } from "react-icons/ri";
import { FaUsersLine, FaQuoteLeft } from "react-icons/fa6";
import { TbLocation } from "react-icons/tb";

export default function About() {
  return (
    <section className="max-padd-container py-10 mt-16">
      {/* Container */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Testimonial Section */}
        <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-xl w-full md:w-1/3">
          <Title title1={"People"} title2={"Says"} showDescription={false} />
          <img src={testimonial} alt="testimonial" className="rounded-full w-14 h-14 mt-3 shadow-md" />
          <h4 className="text-lg font-semibold mt-3">John Doe</h4>
          <p className="text-gray-500 text-sm">CEO at MobileExpo</p>
          <FaQuoteLeft className="text-2xl text-gray-400 mt-3" />
        </div>

        {/* Banner Section */}
        <div className="relative w-full md:w-2/3">
          <img src={about} alt="About Us" className="w-full rounded-xl shadow-lg" />
          <div className="absolute inset-0 bg-black/25 rounded-xl flex items-center justify-center">
            <div className="bg-white/85 p-4 rounded-lg text-center shadow-md">
              <h4 className="text-lg font-semibold">Top view in this week</h4>
              <h2 className="text-2xl font-bold uppercase text-gray-900 mt-1">Trending</h2>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-xl w-full md:w-1/3">
          <Title title1={"About"} title2={"Us"} showDescription={false} />
          <div className="flex flex-col space-y-3 w-full mt-3">
            {[
              { icon: <RiSecurePaymentLine className="text-lg text-blue-500" />, title: "Fast & Secure", desc: "Optimized performance" },
              { icon: <RiSoundModuleLine className="text-lg text-green-500" />, title: "Advanced Filtering", desc: "Find items quickly" },
              { icon: <FaUsersLine className="text-lg text-yellow-500" />, title: "User Reviews", desc: "Ratings and feedback" },
              { icon: <TbLocation className="text-lg text-red-500" />, title: "Order Tracking", desc: "Live order status" },
              { icon: <RiAdminLine className="text-lg text-purple-500" />, title: "Admin Dashboard", desc: "Manage store easily" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition">
                {item.icon}
                <div>
                  <h5 className="font-medium text-sm">{item.title}</h5>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
