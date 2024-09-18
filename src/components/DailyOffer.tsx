import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const DailyOffer = () => {

    return (
        <div className={`bg-black text-white py-8 my-6 font-inria`}>
            <div className="w-full md:w-[80%] flex flex-col md:flex-row mx-auto">
                <div style={{flex: 1}} className="flex flex-col md:items-start items-center justify-center px-2 py-10">
                    <h1 className={`text-3xl font-bold`}>Try this out</h1>
                    <h2 className={`text-6xl font-bold`}>Family Size Pizza</h2>
                    <p className="py-6 text-lg">Special offer for family size pizza</p>
                    <Link href={"/menu/pizzas"} className={`bg-white text-black text-xl font-bold px-4 py-2 my-6 uppercase hover:bg-gray-200 duration-300`}>Order Now</Link>
                </div>
                <div style={{flex: 1}} className="flex justify-center md:justify-end items-center px-2">
                    <Image src={"/pizza.png"} alt={"Pizza"} width={500} height={500}/>
                </div>
            </div>
        </div>
    );
};

export default DailyOffer;