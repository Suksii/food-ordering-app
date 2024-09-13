'use client';

import React, { useEffect, useState } from 'react';

type Props = {
    price: number;
    id: string;
    options?: { name: string; additionalPrice: number }[];
}

const ProductDetails = ({ price, id, options }: Props) => {

    const [quantity, setQuantity] = useState<number>(1);
    const [selectedSize, setSelectedSize] = useState<string>(options?.[0]?.name as string);
    const [totalPrice, setTotalPrice] = useState<number>(price);

        const selectedOption = options && options?.find(option => option.name === selectedSize)
        const singlePrice = price + (selectedOption ? selectedOption?.additionalPrice : price)

        console.log(singlePrice, price);
        


    useEffect(() => {
            setTotalPrice(quantity * singlePrice)
    }, [quantity, selectedSize, singlePrice]);

    return (
        <div className="w-full">
            <h2 className="text-xl font-bold pb-4">Price: ${singlePrice}</h2>
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold">Size</h3>
                <div className="flex gap-2 py-2">
                    {options?.length && options?.map((size, index) => (
                        <button key={index} onClick={() => setSelectedSize(size.name)} className={`bg-gray-100 text-xl font-bold px-4 py-2 uppercase hover:bg-gray-800 hover:text-gray-100  duration-300 ${selectedSize === size.name ? "bg-gray-800 text-gray-100" : "text-gray-900"}`}>{size.name}</button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col py-2">
            </div>
            <div className="flex gap-1 items-center py-2 justify-between">
                <h1 className="text-xl font-semibold">Quantity</h1>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 cursor-pointer"
                        onClick={() => setQuantity(prevState => (prevState > 1 ? prevState - 1 : 1))}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                    <span className="text-xl font-bold px-4 min-w-12">{quantity}</span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor"
                        className="size-6 cursor-pointer"
                        onClick={() => setQuantity(prevState => (prevState < 10 ? prevState + 1 : 10))}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            </div>
            <hr className="pt-2" />
            <p className="text-xl font-semibold pb-2 w-full">Total price: ${totalPrice}</p>
            <div className="w-full pb-4 md:pb-0">
                <button className="w-full bg-gray-800 text-gray-100 text-xl font-bold px-4 py-2 uppercase hover:bg-gray-700 duration-300">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;