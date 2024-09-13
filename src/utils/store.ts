import { ActionTypes, Cart } from "@/types/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

const INITIAL_STATE = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
}

export const useCartStore = create(persist<Cart & ActionTypes>((set, get) => ({
    products: INITIAL_STATE.products,
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,
    addToCart(item) {
        set((state) => ({
            products: [...state.products, item],
            quantity: state.totalItems + item.quantity,
            totalPrice: state.totalPrice = item.price
        }))
    },
    removeFromCart(item) {
        set((state) => ({
            products: state.products.filter(product => product.id !== item.id),
            quantity: state.totalItems - item.quantity,
            totalPrice: state.totalPrice - item.price,
        }))
    }
}), { name: "cart", skipHydration: true }))