"use client"

import { useCartStore } from '@/utils/store';
import React, { useEffect } from 'react';

const Checkout = () => {

    const { totalPrice, totalItems } = useCartStore()

    useEffect(() => {
        useCartStore.persist.rehydrate()
    }, [])

    return (
        <div className="flex flex-col w-full lg:w-[400px] bg-gray-100 rounded-md">
            <h3 className="text-xl font-bold py-2 px-4">Checkout</h3>
            <div className="flex justify-between px-4 py-2">
                <p>Subtotal ({totalItems} items)</p>
                <p>$20.00</p>
            </div>
            <div className="flex justify-between px-4 py-2">
                <p>Delivery</p>
                <p>$3.00</p>
            </div>
            <div className="flex justify-between px-4 py-2">
                <p>Tax</p>
                <p>$0.00</p>
            </div>
            <div className="flex justify-between px-4 py-2">
                <p>Discount</p>
                <p>$0.00</p>
            </div>
            <hr />
            <div className="flex justify-between px-4 py-2">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">${totalPrice}</p>
            </div>
            <button className="bg-gray-800 text-gray-100 text-xl font-bold px-4 py-2 mt-6 uppercase hover:bg-gray-700 duration-300 rounded-b-md">Checkout</button>
        </div>
    );
};

export default Checkout;