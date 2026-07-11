"use client"

import React, { useEffect } from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation"
import { useSession, signIn } from "next-auth/react"

const LoginPage = () => {

    const { status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "authenticated")
            router.push("/")
    }, [status, router])

    if (status !== "unauthenticated")
        return <p>Loading...</p>

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="h-screen w-full md:h-1/2 lg:w-2/3 xl:w-1/2 flex flex-col md:flex-row shadow-md rounded-md overflow-hidden">
                <div className="relative h-full w-full" style={{flex: 1}}>
                    <Image src={"/shrimp.jpg"} alt={"Shrimp"} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover"/>
                    <div className="absolute top-0 bg-black bg-opacity-20 h-full w-full"></div>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full font-inria" style={{flex: 1}}>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Welcome back</h1>
                        <p className="text-gray-500 py-4">Sign in with your Google account to order</p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-md text-xl font-bold px-6 py-3 duration-300 hover:bg-primary hover:border-primary hover:text-white" onClick={() => signIn("google")}>
                            <Image src={"/googleLogo.svg"} alt={"Google"} width={20} height={20}/>
                            <span>Sign in with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
