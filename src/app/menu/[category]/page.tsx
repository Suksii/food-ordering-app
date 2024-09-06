import React from 'react';
import Image from "next/image";
import {Product} from "@/types/types";

const getProducts = async (category:string) => {
    const response = await fetch(`http://localhost:3000/api/products?category=${category}`, {
        cache: "no-store"
    })
    if(!response.ok) {
        throw new Error("Error fetching products");
    }
    return response.json();
}

type Props = {
    params: {
        category: string
    }
}
const CategoryPage = async ({params}:Props) => {

    const products:Product[] = await getProducts(params.category);

    return (
        <div className="w-[80%] mx-auto flex flex-wrap gap-4 justify-center items-center min-h-screen pt-40">
            {products.map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                    <div className="w-[300px] flex flex-col shadow-md">
                        <div className="relative h-full w-full" style={{flex: 1}}>
                            <Image src={item?.image} alt={item.name} width={300} height={200} className="object-cover h-[200px] w-full"/>
                            <div className="absolute top-0 bg-black bg-opacity-20 h-full w-full"></div>
                        </div>
                        <div className="flex flex-col justify-center w-full h-full" style={{flex: 1}}>
                            <div className="flex flex-col items-center justify-center w-full p-4">
                                <h1 className="text-2xl font-bold">{item.name}</h1>
                                <p className="text-gray-500 py-4">{item.description}</p>
                            </div>
                            <div className="flex justify-between items-center w-full px-4">
                                <p className="text-xl font-bold">${item.price}</p>
                            </div>
                            <div className="w-full p-4">
                                <button className="w-full bg-gray-800 text-gray-100 text-xl font-bold px-4 py-2 uppercase hover:bg-gray-700 duration-300">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoryPage;