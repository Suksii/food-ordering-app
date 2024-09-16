
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

export const useAddProduct = () => {

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
    
    return {imageRef, inputs, option, options, setOptions,handleImageUpload, handleChange, handleChangeOption}
}