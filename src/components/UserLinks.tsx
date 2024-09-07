"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"

export const UserLinks = () => {

    const { status } = useSession()

    return (
        <div>
            {status === "unauthenticated" ? (
                <Link className="bg-gray-800 text-gray-100 text-xl px-4 py-2 uppercase hover:bg-gray-700 duration-300" href="/login">Login</Link>
            ) : (
                <div className="flex space-x-12 items-center">
                    <Link href="/orders">Orders</Link>
                    <span className="bg-gray-800 text-gray-100 text-xl px-4 py-2 uppercase hover:bg-gray-700 duration-300 cursor-pointer" onClick={() => signOut()}>Logout</span>
                </div>
            )
            }
        </div>
    )
}

export const UserLinksMobile = () => {
    
    const { status } = useSession()

    return (
        <div className="w-full flex justify-center items-center">
            {status === "unauthenticated" ? (
                <Link className="text-xl uppercase font-semibold py-6 w-full text-center hover:bg-gray-800 hover:text-white cursor-pointer duration-300" href="/login">Login</Link>
            ) : (
                <div className="w-full flex flex-col items-center justify-center text-center">
                    <Link href="/orders" className="text-xl py-6 w-full hover:bg-gray-800 hover:text-white cursor-pointer duration-300">Orders</Link>
                    <span className="text-xl uppercase font-semibold py-6 w-full hover:bg-gray-800 hover:text-white cursor-pointer duration-300" onClick={() => signOut()}>Logout</span>
                </div>
            )
            }
        </div>
    )
}
