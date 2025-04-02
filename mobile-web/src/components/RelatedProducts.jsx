import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import {products }from '../assets/data'
import Item from '../components/Item';
import Title from '../components/Title';

export default function RelatedProducts() {
    const { products } = useContext(ShopContext)
    const [relatedProducts, setRelatedProducts] = useState([])
  
  
    useEffect(() => {
      if (products.length > 0) {
  console.log(products)
  console.log(category)
  
        let filtered = products.slice();
        filtered = filtered.filter((product) => category.category === product.category);
  
        setRelatedProducts(filtered.slice(0, 5));
  
      }
    }, [products]);
  
  
    return (
      <section className='py-16'>
        <Title title={'Related'} title2={'Products'} titleStyles={'pb-10'} paraStyles={'!block'} />
        {/* Container */}
        <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8'>
          {relatedProducts.map(product => (
            <div key={product._id}>
              <Item product={product} />
            </div>
  
          ))}
  
        </div>
      </section>
    )
}
