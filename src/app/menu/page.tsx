import React from 'react';
import Link from "next/link";
import {Categories} from "@/types/types";

const Menu = async () => {

    // type Category = {
    //     id: number;
    //     name: string;
    //     description?: string;
    //     image?: string;
    //     link: string
    // }
    // type Categories = Category[]
    //
    // const categories: Categories = [
    //     {
    //         id: 1,
    //         name: "Pastas",
    //         image: "/pasta.jpg",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, nisl eget vestibulum ultricies, justo odio semper turpis, vel fringilla ligula felis in turpis.",
    //         link: "/menu/pastas"
    //     },
    //     {
    //         id: 2,
    //         name: "Seafood",
    //         image: "/shrimp.jpg",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, nisl eget vestibulum ultricies, justo odio semper turpis, vel fringilla ligula felis in turpis.",
    //         link: "/menu/seafood"
    //     },
    //     {
    //         id: 3,
    //         name: "Rizotto",
    //         image: "/rizotto.jpg",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, nisl eget vestibulum ultricies, justo odio semper turpis, vel fringilla ligula felis in turpis.",
    //         link: "/menu/rizotto"
    //     },
    //     {
    //         id: 4,
    //         name: "Meat",
    //         image: "/meat.jpg",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, nisl eget vestibulum ultricies, justo odio semper turpis, vel fringilla ligula felis in turpis.",
    //         link: "/menu/meat"
    //     },
    //     {
    //         id: 4,
    //         name: "Burgers",
    //         image: "/burger.jpg",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, nisl eget vestibulum ultricies, justo odio semper turpis, vel fringilla ligula felis in turpis.",
    //         link: "/menu/burgers"
    //     },
    //     {
    //         id: 5,
    //         name: "Torillas",
    //         image: "/tortilla.jpg",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, nisl eget vestibulum ultricies, justo odio semper turpis, vel fringilla ligula felis in turpis.",
    //         link: "/menu/torillas"
    //     },
    //     {
    //         id: 6,
    //         name: "Salads",
    //         image: "/salad.jpg",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, nisl eget vestibulum ultricies, justo odio semper turpis, vel fringilla ligula felis in turpis.",
    //         link: "/menu/salads"
    //     },
    //     {
    //         id: 7,
    //         name: "Desserts",
    //         image: "/pancakes.jpg",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, nisl eget vestibulum ultricies, justo odio semper turpis, vel fringilla ligula felis in turpis.",
    //         link: "/menu/desserts"
    //     },
    //     {
    //         id: 8,
    //         name: "Drinks",
    //         image: "/drink.jpg",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius, nisl eget vestibulum ultricies, justo odio semper turpis, vel fringilla ligula felis in turpis.",
    //         link: "/menu/drinks"
    //     }
    // ]

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
        <div className="w-full md:w-[80%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center min-h-screen pt-32">
            {categories.map((item, index) => (
                <Link href={item.slug}
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