type Category = {
    id: number;
    name: string;
    description?: string;
    image?: string;
    slug: string
}

export type Categories = Category[]

export type Product = {
    id: string;
    name: string;
    description?: string;
    price: number;
    image?: string;
    categorySlug: string;
    options?: { name: string, additionalPrice: number }[]
}



export type Order = {
    id: string;
    userEmail: string;
    total: number;
    products: Product[];
    status: string;
    createdAt: Date;
    intent_id?: String;
}