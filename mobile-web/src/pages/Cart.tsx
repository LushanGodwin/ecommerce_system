import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { FaMinus, FaPlus, FaRegWindowClose } from 'react-icons/fa';
import CartTotal from '../components/CartTotal';
import Footer from '../components/Footer';

// Import your products from data.js
import { products } from '../assets/data'; // Adjust the path as per your project structure

export default function Cart() {
    const { cartItems, getCartCount, updateQuantity } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);
    const [quantities, setQuantities] = useState({});

    // Fetch and structure cart data when cartItems change
    useEffect(() => {
        if (products.length > 0) {
            const tempData = [];
            const initialQuantities = {};
            for (let itemId in cartItems) {
                for (let color in cartItems[itemId]) {
                    if (cartItems[itemId][color] > 0) {
                        tempData.push({ _id: itemId, color: color, quantity: cartItems[itemId][color] });
                        initialQuantities[`${itemId}-${color}`] = cartItems[itemId][color];
                    }
                }
            }
            setCartData(tempData);
            setQuantities(initialQuantities);
        }
    }, [cartItems, products]);

    // Increment item quantity
    const increment = (id, color) => {
        const key = `${id}-${color}`;
        setQuantities(prev => {
            const newQuantities = (prev[key] || 0) + 1;
            updateQuantity(id, color, newQuantities);
            return { ...prev, [key]: newQuantities };
        });
    };

    // Decrement item quantity
    const decrement = (id, color) => {
        const key = `${id}-${color}`;
        setQuantities(prev => {
            if (prev[key] > 1) {
                const newQuantities = prev[key] - 1;
                updateQuantity(id, color, newQuantities);
                return { ...prev, [key]: newQuantities };
            }
            return prev;
        });
    };

    return (
        <section>
            <div className="bg-primary mb-16">
                <div className="max-padd-container py-10">
                    <div className="flexStart gap-x-4">
                        <Title title1={'Cart'} title2={'List'} />
                        <h5 className="medium-15 text-gray-30 relative bottom-1.5">
                            ({getCartCount()} Items)
                        </h5>
                    </div>

                    <div className="mt-6">
                        {cartData.map((item, i) => {
                            const productData = products.find(product => product._id === item._id);
                            const key = `${item._id}-${item.color}`;

                            if (!productData) return null;

                            return (
                                <div key={i} className="bg-white p-4 mb-3 rounded-lg flex items-center gap-4">
                                    <div className="w-24 flex-shrink-0">
                                        <img
                                            src={productData.image[0]}
                                            alt="productImg"
                                            className="w-full rounded"
                                        />
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flexBetween">
                                            <h5 className="h5 !my-0 line-clamp-1">{productData.name}</h5>
                                            <FaRegWindowClose
                                                onClick={() => updateQuantity(item._id, item.color, 0)}
                                                className="cursor-pointer text-secondary"
                                            />
                                        </div>
                                        <p className="bold-14 my-0.5">{item.color}</p>
                                        <div className="flexBetween">
                                            <div className="flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-primary">
                                                <button onClick={() => decrement(item._id, item.color)} className="p-1.5 bg-white text-secondary rounded-full shadow-md">
                                                    <FaMinus className="text-xs" />
                                                </button>
                                                <p className="px-2">{quantities[key]}</p>
                                                <button onClick={() => increment(item._id, item.color)} className="p-1.5 bg-white text-secondary rounded-full shadow-md">
                                                    <FaPlus className="text-xs" />
                                                </button>
                                            </div>
                                            <h4 className="h4">{`$${productData.price}.00`}</h4>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex my-20">
                        <div className="w-full sm:w-[450px]">
                            <CartTotal />
                            <button onClick={() => alert('Proceeding to checkout...')} className="btn-secondary mt-7">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}
