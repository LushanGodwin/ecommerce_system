import React, { useEffect, useState } from "react";
import Title from "./Title";
import { products } from "../assets/data";
import Item from "./Item";

export default function PopularProducts() {
  const [PopularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const data = products.filter((item) => item.popular);
    setPopularProducts(data.slice(0, 5));
  }, [products]);
  return (
    <section className="max-padd-container mt-16 ">
      <Title title1={"Popular"} title2={"Products"} />
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {PopularProducts.map((product) => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
