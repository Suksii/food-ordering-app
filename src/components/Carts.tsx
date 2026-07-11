"use client"

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from '@/utils/store';

const Carts = () => {

    const { products, removeFromCart } = useCartStore()

    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center gap-4 w-full lg:w-[400px] py-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-16 text-gray-300">
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                <p className="text-2xl font-semibold text-gray-700">Your cart is empty</p>
                <Link href="/menu" className="bg-primary text-white font-bold px-6 py-2 uppercase rounded-md hover:bg-primary-dark duration-300">Browse the menu</Link>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-2 w-full lg:w-[400px]">
            {products.map(product => (
                <div className="flex bg-gray-100 rounded-md py-2 px-4" key={product.id}>
                    {product.image && <Image src={product?.image} alt={product.name} width={100} height={100} />}
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col px-4">
                            <h3 className="text-xl font-semibold">{product.name}</h3>
                            <p className="text-sm text-gray-500">{product.optionName}</p>
                        </div>
                        <div className="flex items-center gap-6 px-4">
                            <p className="text-xl font-semibold">${product.price}</p>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-8 text-red-500 cursor-pointer"
                                onClick={() => removeFromCart(product)}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carts;