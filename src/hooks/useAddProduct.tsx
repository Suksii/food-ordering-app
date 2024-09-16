
import { ChangeEventHandler, useRef, useState } from "react"

type Option = {
    name: string,
    additionalPrice: number
}
type Inputs = {
    name: string,
    description: string,
    price: number,
    categorySlug: string,
}

export const useAddProduct = () => {

    const imageRef = useRef<HTMLInputElement | null>(null);
    const [inputs, setInputs] = useState<Inputs>({
        name: "",
        description: "",
        price: 0,
        categorySlug: ""
    });
    const [option, setOption] = useState<Option>({
        name: "",
        additionalPrice: 0,
    });
    const [options, setOptions] = useState<Option[]>([]);
    const [image, setImage] = useState<File>();

    const handleImageUpload = () => {
        if (imageRef.current) {
            imageRef.current.click();
        }
    }
    const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const singleFile = (target.files as FileList)[0]
        setImage(singleFile)
    }

    const handleUpload = async () => {
        const data = new FormData()
        data.append("file", image!)
        data.append("upload_preset", "food-ordering")
        const response = await fetch("https://api.cloudinary.com/v1_1/dubu03per/image/upload", {
            method: "POST",
            // headers: {
            //     "Content-Type": "multipart/form-data"
            // },
            body: data
        })
        const responseData = await response.json();
        return responseData.url;
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

    return { imageRef, inputs, option, options, image, setOptions, handleImageUpload, handleChange, handleChangeOption, handleChangeImage, handleUpload }
}