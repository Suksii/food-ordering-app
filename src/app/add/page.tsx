"use client"

import { useRef, useState } from "react"

type Option = {
    optionName: string,
    additionalPrice: number
}
type Inputs = {
    name: string,
    description: string,
    price: number,
    categorySlug: string,
}

const AddProduct = () => {

    const imageRef = useRef<HTMLInputElement | null>(null);
    const [inputs, setInputs] = useState<Inputs>({
        name: "",
        description: "",
        price: 0,
        categorySlug: ""
    });
    const [option, setOption] = useState<Option>({
        optionName: "",
        additionalPrice: 0,
    });
    const [options, setOptions] = useState<Option[]>([]);

    const handleImageUpload = () => {
        if (imageRef.current) {
            imageRef.current.click();
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputs(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }
    const handleChangeOption = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setOption(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    return (
        <div className="min-h-screen flex justify-center items-center flex-col">
            <div className="flex justify-center flex-col w-full md:w-[800px] px-10 mt-10 md:shadow-xl shadow-black">
                <h1 className="text-2xl font-semibold text-center py-4">Add new product</h1>
                <form className="flex flex-col flex-wrap gap-2 w-full">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <div className="bg-gray-100 h-[150px] w-[150px]">
                        </div>
                        <div className="text-center bg-gray-800 text-gray-100 font-semibold py-2 uppercase hover:bg-gray-700 duration-300 w-[150px] cursor-pointer" onClick={handleImageUpload}>
                            <input type="file" className="hidden" ref={imageRef} />
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
                            name="category"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label htmlFor="">Options</label>
                        <div className="flex gap-2">
                            <input placeholder="Type name..."
                                className="shadow-sm shadow-black font-bold px-1 py-2 w-full focus:outline-none"
                                name="optionName"
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
                            <div className="text-center bg-gray-800 text-gray-100 px-4 py-2 font-semibold uppercase hover:bg-gray-700 duration-300 cursor-pointer" onClick={() => setOptions(prevState => [...prevState, option])}>Add option</div>
                            <div className="flex flex-wrap gap-2">
                            {options.map(option => (
                                <div className="px-4 ring-1 ring-gray-800 flex items-center text-gray-800 gap-1" key={option.optionName}>
                                    <p>{option.optionName}</p>
                                    <p>-</p>
                                    <p>${option.additionalPrice}</p>
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