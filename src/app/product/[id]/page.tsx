import React from 'react';
import Image from "next/image";
import ProductDetails from "@/components/ProductDetails";
import DeleteButton from '@/components/DeleteButton';
import { prisma } from '@/utils/connection';
import { notFound } from 'next/navigation';

export const revalidate = 60;

const getSingleProduct = async (id: string) => {
    const product = await prisma.product.findUnique({
        where: { id }
    });
    if (!product) {
        notFound();
    }
    return { ...product, price: Number(product.price) };
}

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
    const singleProduct = await getSingleProduct(params.id)

    return (
        <div className="flex h-screen items-center justify-center font-inria">
            <div className="h-screen w-full md:h-3/5 lg:w-2/3 xl:w-1/2 flex flex-col md:flex-row shadow-md relative">
                <div className="relative h-full w-full" style={{ flex: 1 }}>
                    {singleProduct.image && <Image src={singleProduct.image} alt={singleProduct.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />}
                    <div className="absolute top-0 bg-black bg-opacity-20 h-full w-full"></div>
                </div>
                <div className="flex flex-col justify-center w-full h-full" style={{ flex: 1 }}>
                    <div className="flex flex-col items-center justify-center w-full p-4">
                        <h1 className="text-2xl font-bold">{singleProduct.name}</h1>
                        <p className="text-gray-500 py-4">{singleProduct.description}</p>
                    </div>
                    <div className="flex justify-between items-center w-full px-4">
                        <ProductDetails product={{
                            id: singleProduct.id,
                            name: singleProduct.name,
                            description: singleProduct.description ?? undefined,
                            image: singleProduct.image ?? undefined,
                            price: singleProduct.price,
                            categorySlug: singleProduct.categorySlug,
                            options: singleProduct.options as { name: string, additionalPrice: number }[],
                        }} />
                    </div>
                </div>
                <DeleteButton id={singleProduct.id} />
            </div>
        </div>
    );
};
export default SingleProductPage;
