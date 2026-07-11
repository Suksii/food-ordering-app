import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {prisma} from "@/utils/connection";

export const revalidate = 60;

const Menu = async () => {

    const getCategories = async () => {
        try {
            return await prisma.category.findMany();
        } catch (error) {
            console.error("Error fetching categories", error);
            return [];
        }
    }

    const categories = await getCategories();

    if (categories.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-2 font-inria">
                <h1 className="text-3xl font-bold">Our menu is being prepared</h1>
                <p className="text-gray-500">Please check back soon.</p>
            </div>
        )
    }

    return (
        <div className="w-full md:w-[80%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center min-h-screen pt-32 font-inria">
            {categories.map((item, index) => (
                <Link href={`menu/${item.slug}`}
                      key={index}
                      className="relative flex items-center justify-center w-full h-[400px] flex-col shadow-md overflow-hidden md:hover:scale-[1.03] duration-300"
                >
                    {item.image && <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 27vw" className="object-cover object-bottom"/>}
                    <div className="absolute top-0 bg-black bg-opacity-40 h-full w-full"></div>
                    <div className="relative flex flex-col justify-end items-center text-center w-full h-full">
                        <div className="flex flex-col items-center justify-center w-full p-4">
                            <h1 className="text-2xl font-bold text-white">{item.name}</h1>
                            <p className="text-gray-100 py-4">{item?.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Menu;
