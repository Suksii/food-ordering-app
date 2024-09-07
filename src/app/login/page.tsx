"use client"

import React from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation"
import { useSession, signIn } from "next-auth/react"

const LoginPage = () => {

    const {data, status} = useSession()
    const router = useRouter()


    if(status === "loading")
        return <p>Loading...</p>

    if(status === "authenticated")
        router.push("/")

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="h-screen w-full md:h-1/2 lg:w-2/3 xl:w-1/2 flex flex-col md:flex-row shadow-md">
                <div className="relative h-full w-full" style={{flex: 1}}>
                    <Image src={"/shrimp.jpg"} alt={"Shrimp"} fill className="object-cover"/>
                    <div className="absolute top-0 bg-black bg-opacity-20 h-full w-full"></div>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full" style={{flex: 1}}>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Login</h1>
                        <p className="text-gray-500 py-4">Login using your google or facebook account</p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <button className="flex items-center shadow-sm shadow-black text-xl font-bold px-4 py-2 duration-300 hover:bg-gray-800 hover:text-gray-100" onClick={() => signIn("google")}>
                            <Image src={"/googleLogo.svg"} alt={"Google"} width={20} height={20} className="mr-2"/>
                            <span>Login with Google</span>
                        </button>
                        <button className="flex items-center shadow-sm shadow-black text-xl font-bold px-4 py-2 duration-300 hover:bg-blue-800 hover:text-gray-100">
                            <Image src={"/facebookLogo.svg"} alt={"Facebook"} width={20} height={20} className="mr-2"/>
                            <span>Login with Facebook</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;