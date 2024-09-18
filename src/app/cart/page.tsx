import React from 'react';
import Carts from "@/components/Carts";
import Checkout from "@/components/Checkout";

const  CartPage = () => {
    return (
        <div className="w-full md:w-[80%] gap-4 mx-auto flex flex-col lg:flex-row items-center justify-center h-screen font-inria">
            <Carts />
            <Checkout />
        </div>
    );
};

export default CartPage;