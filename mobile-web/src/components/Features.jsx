import React from 'react'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { TbTruckDelivery } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";


export default function Features() {
  return (
    <section className='max-padd-container mt-16'>
        <div className='max-padd-container flex justify-between items-center flex-wrap
        gap-8 rounded-2xl'>
            <div className='flex justify-center gap-x-3 items-center'>
                <RiMoneyDollarCircleLine className='text-3xl' />
                <div>
                    <h4 className='medium-15'>MONEY BACK GUARANTEE</h4>
                    <p>100% refund guaranteed if you're not satisfied.</p>
                </div>
            </div>
            <div className='flex justify-center gap-x-3 items-center'>
                <TbTruckDelivery className='text-3xl' />
                <div>
                    <h4 className='medium-15'>FREE SHIPPING & RETURNS</h4>
                    <p>Free shipping available on all orders.</p>
                </div>
            </div>
            <div className='flex justify-center gap-x-3 items-center'>
                <CiMobile3 className='text-3xl' />
                <div>
                    <h4 className='medium-15'>24/7 ONLINE SUPPORT</h4>
                    <p>Our team is here to assist round you the clock.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
