import React from 'react';
import Link from "next/link";
import {Categories} from "@/types/types";

const Menu = async () => {

    const getCategories = async () => {
        const response = await fetch("http://localhost:3000/api/categories",{
            cache: "no-store"
        });
        const data = await response.json();
        if(!response.ok) {
            console.error("Error fetching categories");
            return;
        }
        return data;
    }

    const categories:Categories = await getCategories();

    return (
        <div className="w-full md:w-[80%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center min-h-screen pt-32 font-inria">
            {categories?.map((item, index) => (
                <Link href={`menu/${item.slug}`}
                      key={index}
                      className="relative flex items-center justify-center w-full h-[400px] flex-col shadow-md bg-cover bg-bottom bg-no-repeat md:hover:scale-[1.03] duration-300"
                      style={{backgroundImage: `url(${item.image})`}}
                >
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