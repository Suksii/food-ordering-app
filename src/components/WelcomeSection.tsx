import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
const WelcomeSection = () => {
    return (
        <div className="relative z-0 h-[500px] md:h-[700px] w-full font-inria">
            <Image src="/pancakes.jpg" alt="Pancakes" fill priority sizes="100vw" className="object-cover object-center z-0"/>
            <div className="absolute top-0 bg-black bg-opacity-60 h-[500px] md:h-[700px] w-full z-10"></div>
            <div className="relative flex flex-col items-center justify-center h-[500px] md:h-[700px] w-full top-0 z-20">
                <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to our store</h1>
                <p className="text-white text-lg md:text-3xl">Get the best pancakes in town</p>
                <Link href={"/menu/dessert"} className="bg-primary text-white text-xl font-bold px-6 py-3 mt-6 uppercase rounded-md hover:bg-primary-dark hover:scale-105 duration-300">Order Now</Link>
            </div>
        </div>
    );
};

export default WelcomeSection;