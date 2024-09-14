import React, { useEffect } from 'react';
import Image from "next/image";
import ProductDetails from "@/components/ProductDetails";
import { Product } from '@/types/types';
import DeleteButton from '@/components/DeleteButton';

const getSingleProduct = async (id: string) => {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        cache: "no-store"
    })

    if (!response.ok) {
        throw new Error("Request has failed");
    }

    return response.json();
}

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
    const singleProduct: Product = await getSingleProduct(params.id)

    console.log(singleProduct.options);



    return (
        <div className="flex h-screen items-center justify-center">
            <div className="h-screen w-full md:h-3/5 lg:w-2/3 xl:w-1/2 flex flex-col md:flex-row shadow-md relative">
                <div className="relative h-full w-full" style={{ flex: 1 }}>
                    {singleProduct.image && <Image src={singleProduct?.image} alt={singleProduct?.categorySlug} fill className="object-cover" />}
                    <div className="absolute top-0 bg-black bg-opacity-20 h-full w-full"></div>
                </div>
                <div className="flex flex-col justify-center w-full h-full" style={{ flex: 1 }}>
                    <div className="flex flex-col items-center justify-center w-full p-4">
                        <h1 className="text-2xl font-bold">{singleProduct.name}</h1>
                        <p className="text-gray-500 py-4">{singleProduct.description}</p>
                    </div>
                    <div className="flex justify-between items-center w-full px-4">
                        <ProductDetails product={singleProduct}
                        />
                    </div>
                </div>
                <DeleteButton id={singleProduct.id} />
            </div>
        </div>
    );
};
export default SingleProductPage;