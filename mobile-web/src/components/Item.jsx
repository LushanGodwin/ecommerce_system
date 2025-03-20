import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Item({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden group transition-all duration-300 transform hover:scale-105">
      <Link 
        to={'/'} 
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} 
        className="flex justify-center p-2 bg-slate-50 relative"
      >
        <img 
          src={product.image.length > 1 && hovered ? product.image[1] : product.image[0]} 
          alt="productImg" 
          className="transition-all duration-300 transform group-hover:scale-105 object-contain"
        />
      </Link>
      <div className="p-4">
        <h4 className="font-semibold text-lg text-gray-800 line-clamp-1">{product.name}</h4>
        <div className="flex justify-between pt-2">
          <p className="text-sm text-gray-600">{product.category}</p>
          <h5 className="text-lg font-semibold text-gray-800">Rs.{product.price}.00</h5>
        </div>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2 text-start">{product.description}</p>
      </div>
    </div>
  );
}
