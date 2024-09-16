"use client"

import { useAddProduct } from "@/hooks/useAddProduct";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AddProduct = () => {

    const { imageRef, inputs, option, options, setOptions, handleChangeImage, handleImageUpload, handleChange, handleChangeOption, handleUpload, image } = useAddProduct()

    const { data: session, status } = useSession()
    const router = useRouter();

    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (status === "unauthenticated" || !session?.user.isAdmin) {
        router.push("/")
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = await handleUpload();
        try {
            const response = await fetch("http://localhost:3000/api/products", {
                method: "POST",
                body: JSON.stringify({
                    image: url,
                    ...inputs,
                    options
                })
            })
            const data = await response.json()
            toast.success("Product added successfully!")
            router.push(`/product/${data.id}`)
            
        } catch (error){
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center flex-col">
            <div className="flex justify-center flex-col w-full md:w-[800px] px-10 mt-10 md:shadow-xl shadow-black">
                <h1 className="text-2xl font-semibold text-center py-4">Add new product</h1>
                <form className="flex flex-col flex-wrap gap-2 w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-center items-center">
                        <div className="h-[150px] w-[150px] relative">
                            {image ? <Image src={`/${image?.name}`} alt="image" fill className="object-cover"/> : <div className="flex items-center justify-center h-full ring-1">No Image</div>}
                        </div>
                        <div className="text-center bg-gray-800 text-gray-100 font-semibold py-2 uppercase hover:bg-gray-700 duration-300 w-[150px] cursor-pointer" onClick={handleImageUpload}>
                            <input type="file" className="hidden" ref={imageRef} onChange={handleChangeImage}/>
                            <p>Upload Image</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="">Name</label>
                        <input placeholder="Type name..."
                            className="shadow-sm shadow-black font-bold px-1 py-2 w-full focus:outline-none"
                            name="name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="">Description</label>
                        <textarea placeholder="Type description..."
                            className="shadow-sm shadow-black font-bold px-1 py-2 w-full focus:outline-none"
                            name="description"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="">Price</label>
                        <input placeholder="Type price..."
                            className="shadow-sm shadow-black font-bold px-1 py-2 w-full focus:outline-none"
                            name="price"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="">Category</label>
                        <input placeholder="Type category..."
                            className="shadow-sm shadow-black font-bold px-1 py-2 w-full focus:outline-none"
                            name="categorySlug"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="">Options</label>
                        <div className="flex gap-2">
                            <input placeholder="Type name..."
                                className="shadow-sm shadow-black font-bold px-1 py-2 w-full focus:outline-none"
                                name="name"
                                onChange={handleChangeOption}
                            />
                            <input type="number"
                                placeholder="Type additional price..."
                                className="shadow-sm shadow-black font-bold px-1 py-2 w-full focus:outline-none"
                                name="additionalPrice"
                                onChange={handleChangeOption}
                            />
                        </div>
                        <div className="flex justify-between mt-2 flex-wrap gap-2">
                            <div className={`text-center bg-gray-800 text-gray-100 px-4 py-2 font-semibold uppercase hover:bg-gray-700 duration-300 cursor-pointer ${options.some(opt => opt.name === option.name) ? 'cursor-not-allowed opacity-50' : ''}`} onClick={() => !options.some(opt => opt.name === option.name) && setOptions(prevState => [...prevState, option])}>Add option</div>
                            <div className="flex flex-wrap gap-2">
                                {options.map(option => (
                                    <div className="px-4 ring-1 ring-gray-800 flex items-center text-gray-800 gap-1 relative"
                                        key={option.name}
                                    >
                                        <p>{option.name}</p>
                                        <p>-</p>
                                        <p>${option.additionalPrice}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 bg-red-600 p-0.5 text-red-50 rounded-full cursor-pointer font-bold absolute top-0 right-0 translate-x-1/2 -translate-y-1/2" onClick={() => setOptions(options.filter(item => (item.name !== option.name) || (item.name !== option.name)))}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className="w-full text-center bg-gray-800 text-gray-100 text-xl font-bold px-4 py-2 uppercase hover:bg-gray-700 duration-300 my-4">Add product</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct