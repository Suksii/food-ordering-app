"use client"

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { Order, Product } from '@/types/types';
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';

const OrdersPage = () => {

    const { data: session, status } = useSession()

    const router = useRouter()

    if (status === "unauthenticated")
        router.push("/")


    const { isLoading, error, data } = useQuery({
        queryKey: ['orders'],
        queryFn: () => fetch('http://localhost:3000/api/orders').then(response => response.json())
    })

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ id, status }: { id: string, status: string }) => {
            return fetch(`http://localhost:3000/api/orders/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(status)
            })
        },
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["orders"] })
        }
    })

    const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements[0] as HTMLInputElement;
        const status = input.value;

        mutation.mutate({ id, status })
    }

    if (isLoading || status === "loading") return "Loading..."

    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%]">
                <table className="w-full border-separate border-spacing-1">
                    <thead className="bg-gray-600 text-gray-100">
                        <tr className="text-left">
                            <th className="hidden lg:block py-6 px-2">Order ID</th>
                            <th className="py-6 px-2">Date</th>
                            <th className="py-6 px-2">Customer</th>
                            <th className="py-6 px-2">Price</th>
                            <th className="hidden md:block py-6 px-2">Products</th>
                            <th className="py-6 px-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((order: Order) => (
                            <tr key={order.id} className="text-left odd:bg-gray-100">
                                <td className="hidden lg:block py-6 px-2">{order.id}</td>
                                <td className="py-6 px-2">{new Date(order.createdAt).toLocaleDateString('en-GB').replaceAll("/", ".")}</td>
                                <td className="py-6 px-2">{order.userEmail}</td>
                                <td className="py-6 px-2">{order.total} euros</td>
                                <td className="hidden md:block py-6 px-2">
                                    {order.products.map((product: Product) => (
                                        <p>{product.name}</p>
                                    ))}
                                </td>
                                {session?.user.isAdmin ? (
                                    <td>
                                        <form className="flex flex-col md:flex-row items-center justify-center gap-1" onSubmit={(e) => handleUpdate(e, order.id)}>
                                            <input placeholder={order.status} className="flex items-center shadow-sm shadow-black font-bold px-1 py-2 md:w-fit w-full" />
                                            <button className="bg-gray-800 text-gray-100 px-3 py-2 uppercase hover:bg-gray-700 duration-300 w-full md:w-fit">Save</button>
                                        </form>
                                    </td>
                                ) : (
                                    <td className="py-6 px-2">{order.status}</td>
                                )
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersPage;