"use client"

import React from 'react';

const  OrdersPage = () => {

    type Order = {
        id: number;
        customer: string;
        price: number;
        product: string;
        status: string;
    }[]

    const orders: Order = [
        {
            id: 1,
            customer: "John Doe",
            price: 10.00,
            product: "Shrimp",
            status: "Delivered"
        },
        {
            id: 2,
            customer: "Jane Doe",
            price: 15.00,
            product: "Fish",
            status: "Delivered"
        }
    ]

    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%]">
                <table className="w-full border-separate border-spacing-1">
                    <thead className="bg-gray-600 text-gray-100">
                        <tr className="text-left">
                            <th className="hidden md:block py-6 px-2">Order ID</th>
                            <th className="py-6 px-2">Customer</th>
                            <th className="py-6 px-2">Price</th>
                            <th className="hidden md:block py-6 px-2">Product</th>
                            <th className="py-6 px-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index} className="text-left odd:bg-gray-100">
                                <td className="hidden md:block py-6 px-2">{order.id}</td>
                                <td className="py-6 px-2">{order.customer}</td>
                                <td className="py-6 px-2">{order.price}</td>
                                <td className="hidden md:block py-6 px-2">{order.product}</td>
                                <td className="py-6 px-2">{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersPage;