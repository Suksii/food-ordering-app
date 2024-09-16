import { error } from 'console';
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/connection";


export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    try {
        const products = await prisma.product.findMany({
            where: {
                ...category ? { category: { slug: category } } : { isFeatured: true }
            }
        });
        return new NextResponse(
            JSON.stringify(products),
            { status: 200 }
        );
    } catch (err) {
        return new NextResponse(
            JSON.stringify({ message: "Internal server error" }),
            { status: 500 }
        );
    }
}

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json()
        const product = await prisma.product.create({
            data: body,
        })
        return new NextResponse(
            JSON.stringify(product),
            { status: 200 }
        )
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "Internal server error" }),
            { status: 500 }
        )
    }
}