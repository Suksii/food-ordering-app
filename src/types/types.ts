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

export type CartItem = {
    id: string;
    name: string;
    image?: string;
    price: number;
    optionName?: string;
    quantity: number;
}

export type Cart = {
    products: CartItem[];
    totalItems: number;
    totalPrice: number;
}

export type ActionTypes = {
    addToCart: (item: CartItem) => void;
    removeFromCart: (item: CartItem) => void;

}