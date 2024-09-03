'use client';

import React from 'react';
import Image from"next/image";


const Featured = () => {

    const products = [
        {title: "Pancakes", description: "Delicious pancakes", src: "/pancakes.jpg", alt: "Pancakes"},
        {title: "Pancakes", description: "Delicious pancakes", src: "/pancakes.jpg", alt: "Pancakes"},
        {title: "Pancakes", description: "Delicious pancakes", src: "/pancakes.jpg", alt: "Pancakes"},
        {title: "Pancakes", description: "Delicious pancakes", src: "/pancakes.jpg", alt: "Pancakes"},
        {title: "Pancakes", description: "Delicious pancakes", src: "/pancakes.jpg", alt: "Pancakes"},
        {title: "Pancakes", description: "Delicious pancakes", src: "/pancakes.jpg", alt: "Pancakes"},
    ];

     return (
         <>
            <h1 className="text-4xl font-bold text-center py-10">Check out our featured products</h1>
            <div className="w-full md:w-[80%] mx-auto overflow-x-scroll py-10 scroll">
                <div className="w-max flex space-x-4">
                {products.map((product, index) => (
                    <div className="w-screen md:w-[40vw] xl:w-[20vw] flex flex-col items-center justify-around px-2 py-4 bg-gray-100 hover:bg-gray-200 transition-all duration-300" key={index}>
                        <div className="w-full flex justify-center items-center rounded-full">
                            <Image src={product.src} alt={product.title} width={200} height={200}/>
                        </div>
                        <div className="flex flex-col items-center justify-evenly">
                            <h2 className="text-xl font-semibold py-2 uppercase">{product.title}</h2>
                            <p className="text-sm text-gray-500 pb-6">{product.description}</p>
                            <button className="bg-gray-800 text-gray-100 text-xl font-bold px-4 py-2 mt-6 uppercase hover:bg-gray-700 duration-300">Order Now</button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
         </>
        );
};

export default Featured;