import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/connection";
import { getAuthSession } from "@/utils/auth";


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
    const session = await getAuthSession();
    if (!session?.user.isAdmin) {
        return new NextResponse(
            JSON.stringify({ message: "You are not allowed!" }),
            { status: 403 }
        )
    }
    try {
        const body = await req.json()

        const name = typeof body.name === "string" ? body.name.trim() : "";
        const price = Number(body.price);
        const categorySlug = typeof body.categorySlug === "string" ? body.categorySlug.trim() : "";

        if (!name || !categorySlug || !Number.isFinite(price) || price <= 0) {
            return new NextResponse(
                JSON.stringify({ message: "Name, category and a valid price are required!" }),
                { status: 400 }
            )
        }

        const product = await prisma.product.create({
            data: {
                name,
                price,
                categorySlug,
                description: typeof body.description === "string" ? body.description : null,
                image: typeof body.image === "string" ? body.image : null,
                options: Array.isArray(body.options) ? body.options : [],
            },
        })
        return new NextResponse(
            JSON.stringify(product),
            { status: 201 }
        )
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "Internal server error" }),
            { status: 500 }
        )
    }
}