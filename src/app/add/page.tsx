"use client"

import { useRef } from "react"

const AddProduct = () => {

    const imageRef = useRef<HTMLInputElement | null>(null);

    const handleImageUpload = () => {
        if (imageRef.current) {
            imageRef.current.click();
        }
    }

    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <div className="flex justify-center flex-col w-full md:w-[800px] px-10 md:shadow-xl shadow-black">
                <h1 className="text-2xl font-semibold text-center py-4">Add new product</h1>
                <form className="flex flex-col flex-wrap gap-2 w-full">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="bg-gray-100 h-[200px] w-[150px]">
                        </div>
                        <div className="text-center bg-gray-800 text-gray-100 font-bold py-2 uppercase hover:bg-gray-700 duration-300 w-[150px] cursor-pointer" onClick={handleImageUpload}>
                            <input type="file" className="hidden" ref={imageRef} />
                            <p>Upload Image</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="">Name</label>
                        <input placeholder="Type name..." className="shadow-sm shadow-black font-bold px-1 py-2 w-full focus:outline-none" />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="">Description</label>
                        <textarea placeholder="Type description..." className="shadow-sm shadow-black font-bold px-1 py-2 w-full focus:outline-none" />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="">Price</label>
                        <input placeholder="Type price..." className="shadow-sm shadow-black font-bold px-1 py-2 w-full focus:outline-none" />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="">Category</label>
                        <input placeholder="Type category..." className="shadow-sm shadow-black font-bold px-1 py-2 w-full focus:outline-none" />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="">Options</label>
                        <div className="flex gap-2">
                            <input placeholder="Type name..." className="shadow-sm shadow-black font-bold px-1 py-2 w-full focus:outline-none" />
                            <input placeholder="Type additional price..." className="shadow-sm shadow-black font-bold px-1 py-2 w-full focus:outline-none" />
                        </div>
                    </div>
                    <button className="w-full text-center bg-gray-800 text-gray-100 text-xl font-bold px-4 py-2 uppercase hover:bg-gray-700 duration-300 my-4">Add product</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct