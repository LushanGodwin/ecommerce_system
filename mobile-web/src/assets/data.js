import samsung1 from "../assets/samsungs/s22.png";
import samsung2 from "../assets/samsungs/s23.png";
import iphone1 from "../assets/iphones/iphone11.png";
import iphone2 from "../assets/iphones/iphone11pro.png";
import iphone2Slide from "../assets/iphones/iphone11pro1.png";
import pixel1 from "../assets/pixels/pixel7.png";
import pixel2 from "../assets/pixels/pixel8.png";

export const products = [
  // Samsung Mobiles
  {
    _id: "1",
    name: "Samsung Galaxy S23 Ultra",
    description: "Experience top-tier performance with a 200MP camera and S-Pen.",
    price: 1199,
    image: [samsung1],
    category: "Samsung",
    colors: ["Phantom Black", "Green", "Lavender"],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "2",
    name: "Samsung Galaxy A54",
    description: "Mid-range power with an amazing display and battery life.",
    price: 449,
    image: [samsung2],
    category: "Samsung",
    colors: ["Awesome Lime", "Awesome Violet"],
    date: 1716634345448,
    popular: false,
  },

  // Apple Mobiles
  {
    _id: "3",
    name: "iPhone 14 Pro Max",
    description: "Dynamic Island, Always-On display, and an A16 Bionic chip.",
    price: 1099,
    image: [iphone1],
    category: "Apple",
    colors: ["Deep Purple", "Silver", "Gold", "Space Black"],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "4",
    name: "iPhone 13",
    description: "Powerful A15 Bionic chip with a dual-camera system.",
    price: 699,
    image: [iphone2, iphone2Slide],
    category: "Apple",
    colors: ["Pink", "Blue", "Midnight", "Starlight", "Red"],
    date: 1716634345448,
    popular: false,
  },

  // OnePlus Mobiles
  {
    _id: "5",
    name: "OnePlus 11 5G",
    description: "A powerful Snapdragon 8 Gen 2 with Hasselblad cameras.",
    price: 699,
    image: [pixel1],
    category: "OnePlus",
    colors: ["Titan Black", "Eternal Green"],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "6",
    name: "OnePlus Nord 2T",
    description: "Great performance with a 50MP AI camera at a budget price.",
    price: 399,
    image: [pixel2],
    category: "OnePlus",
    colors: ["Gray Shadow", "Jade Fog"],
    date: 1716634345448,
    popular: false,
  },
];
