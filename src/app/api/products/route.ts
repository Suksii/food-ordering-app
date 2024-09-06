import {NextResponse} from "next/server";
import {prisma} from "@/utils/connection";


export const GET = async () => {
    try {
        const categories = await prisma.category.findMany();
        return new NextResponse(
            JSON.stringify(categories),
            {status: 200}
        );
    } catch (err) {
        return new NextResponse(
            JSON.stringify({message: "Internal server error"}),
            {status: 500}
        );
    }
}