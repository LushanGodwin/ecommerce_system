import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Item from './Item';
import { products } from '../assets/data';
import { ShopContext } from '../context/ShopContext';

export default function NewArrivals() {
  const {products} = useContext(ShopContext);

  const [PopularProducts, setPopularProducts] = useState([]);

  useEffect(()=>{
    const data = products.slice(0, 6);
    setPopularProducts(data);
  },[products])

  return (
    <section className='max-padd-container mt-16'>
        <Title title1={'New'} title2={'Arrivals'}/>
        <Swiper
          autoplay={{ 
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300:{
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640:{
              slidesPerView: 2,
              spaceBetween: 30,
            },
            765:{
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024:{
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280:{
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper h-[399px] mt-5"
        >
        {PopularProducts.map((product)=>(
          <SwiperSlide key={product._id}>
            <Item product={product} />
          </SwiperSlide>
        
        ))}
        </Swiper>
    </section>
  )
}
