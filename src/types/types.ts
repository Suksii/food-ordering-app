type Category = {
    id: number;
    name: string;
    description?: string;
    image?: string;
    slug: string
}

export type Categories = Category[]

export type Product = {
    id: number;
    name: string;
    description?: string;
    price: number;
    image?: string;
    options?: {title: string, additionalPrice: number}[]
}