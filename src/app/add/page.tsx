"use client"

import { useAddProduct } from "@/hooks/useAddProduct";

const AddProduct = () => {

    const {imageRef, inputs, option, options, setOptions,handleImageUpload, handleChange, handleChangeOption} = useAddProduct()

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
                            <div className={`text-center bg-gray-800 text-gray-100 px-4 py-2 font-semibold uppercase hover:bg-gray-700 duration-300 cursor-pointer ${options.some(opt => opt.optionName === option.optionName) ? 'cursor-not-allowed opacity-50' : ''}`} onClick={() => !options.some(opt => opt.optionName === option.optionName) && setOptions(prevState => [...prevState, option])}>Add option</div>
                            <div className="flex flex-wrap gap-2">
                                {options.map(option => (
                                    <div className="px-4 ring-1 ring-gray-800 flex items-center text-gray-800 gap-1 relative"
                                        key={option.optionName}
                                    >
                                        <p>{option.optionName}</p>
                                        <p>-</p>
                                        <p>${option.additionalPrice}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 bg-red-600 p-0.5 text-red-50 rounded-full cursor-pointer font-bold absolute top-0 right-0 translate-x-1/2 -translate-y-1/2" onClick={() => setOptions(options.filter(item => (item.optionName !== option.optionName) || (item.optionName !== option.optionName)))}>
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