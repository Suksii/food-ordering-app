import Link from 'next/link';
import React from 'react';
const WelcomeSection = () => {
    return (
        <div className="relative z-0 h-[500px] md:h-[700px] w-full">
            <div style={{backgroundImage: "url('/pancakes.jpg')"}} className="bg-fixed absolute top-0 h-[500px] md:h-[700px] w-full bg-cover bg-center z-0"></div>
            <div className="absolute top-0 bg-black bg-opacity-60 h-[500px] md:h-[700px] w-full z-10"></div>
            <div className="relative flex flex-col items-center justify-center h-[500px] md:h-[700px] w-full top-0 z-20">
                <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to our store</h1>
                <p className="text-white text-lg md:text-3xl">Get the best pancakes in town</p>
                <Link href={"/menu/dessert"} className="bg-white text-black text-xl font-bold px-4 py-2 mt-6 uppercase hover:bg-gray-200 duration-300">Order Now</Link>
            </div>
        </div>
    );
};

export default WelcomeSection;