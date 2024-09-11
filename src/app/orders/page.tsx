"use client"

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Order, Product } from '@/types/types';
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';

const  OrdersPage = () => {

    const { data:session, status } = useSession()

    const router = useRouter()

    if(status === "unauthenticated")
        router.push("/")
    

    const { isLoading, error, data } = useQuery({
        queryKey: ['orders'],
        queryFn: () => fetch('http://localhost:3000/api/orders').then(response => response.json())
    })

    if( isLoading || status === "loading") return "Loading..."

    console.log(data);
    

    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%]">
                <table className="w-full border-separate border-spacing-1">
                    <thead className="bg-gray-600 text-gray-100">
                        <tr className="text-left">
                            <th className="hidden md:block py-6 px-2">Order ID</th>
                            <th className="py-6 px-2">Date</th>
                            <th className="py-6 px-2">Customer</th>
                            <th className="py-6 px-2">Price</th>
                            <th className="hidden md:block py-6 px-2">Products</th>
                            <th className="py-6 px-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: Order) => (
                            <tr key={item.id} className="text-left odd:bg-gray-100">
                                <td className="hidden md:block py-6 px-2">{item.id}</td>
                                <td className="py-6 px-2">{new Date(item.createdAt).toLocaleDateString('en-GB').replaceAll("/", ".")}</td>
                                <td className="py-6 px-2">{item.userEmail}</td>
                                <td className="py-6 px-2">{item.total} euros</td>
                                <td className="hidden md:block py-6 px-2">
                                    {item.products.map((product: Product) => (
                                        <p>{product.name}</p>
                                    ))}
                                </td>
                                <td className="py-6 px-2">{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersPage;