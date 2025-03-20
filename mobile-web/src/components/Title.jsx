import React from "react";

export default function Title({ title1, title2, showDescription = true }) {
  return (
    <div className="max-padd-container mt-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800">
        {title1} <span className="text-blue-500">{title2}</span>
      </h2>
      {showDescription && (
        <p className="mt-2 text-gray-600 text-lg leading-relaxed">
          Discover the New smartphones and accessories at unbeatable prices. 
          Stay ahead with cutting-edge technology, stylish designs, and powerful 
          performance—all in one place.
        </p>
      )}
    </div>
  );
}
