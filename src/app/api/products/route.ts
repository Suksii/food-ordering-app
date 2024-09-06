import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/utils/connection";


export const GET = async (req:NextRequest) => {
    const {searchParams} = new URL(req.url);
    const category = searchParams.get("category");
    try {
        const products = await prisma.product.findMany();
        return new NextResponse(
            JSON.stringify(products),
            {status: 200}
        );
    } catch (err) {
        return new NextResponse(
            JSON.stringify({message: "Internal server error"}),
            {status: 500}
        );
    }
}