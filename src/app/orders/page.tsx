"use client"

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Order, Product } from '@/types/types';
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify'

const OrdersPage = () => {

    const { data: session, status } = useSession()

    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated")
            router.push("/")
    }, [status, router])

    const { isLoading, error, data } = useQuery({
        queryKey: ['orders'],
        queryFn: () => fetch('/api/orders').then(response => response.json()),
        enabled: status === "authenticated"
    })

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: ({ id, status }: { id: string, status: string }) => {
            return fetch(`/api/orders/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(status)
            }).then((response) => response.json())
        },
        onSuccess(data) {
            queryClient.invalidateQueries({ queryKey: ["orders"] })
            toast.success(data.message)
        }
    })

    const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements[0] as HTMLInputElement;
        const status = input.value;

        mutation.mutate({ id, status })
    }

    if (isLoading || status !== "authenticated") return "Loading..."

    const orders: Order[] = Array.isArray(data) ? data : [];

    return (
        <div className="flex min-h-screen justify-center items-center font-inria">
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
                        {orders.map((order: Order) => (
                            <tr key={order.id} className="text-left odd:bg-gray-100">
                                <td className="hidden lg:block py-6 px-2">{order.id}</td>
                                <td className="py-6 px-2">{new Date(order.createdAt).toLocaleDateString('en-GB').replaceAll("/", ".")}</td>
                                <td className="py-6 px-2">{order.userEmail}</td>
                                <td className="py-6 px-2">{order.total} euros</td>
                                <td className="hidden md:block py-6 px-2">
                                    {order.products.map((product: Product, index) => (
                                        <p key={index}>{product.name}</p>
                                    ))}
                                </td>
                                {session?.user.isAdmin ? (
                                    <td>
                                        <form className="flex flex-col md:flex-row items-center justify-center gap-1" onSubmit={(e) => handleUpdate(e, order.id)}>
                                            <input placeholder={order.status} className="border border-gray-300 rounded-md font-bold px-2 py-2 md:w-fit w-full focus:outline-none focus:border-primary" />
                                            <button className="bg-primary text-white px-3 py-2 uppercase rounded-md hover:bg-primary-dark duration-300 w-full md:w-fit">Save</button>
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