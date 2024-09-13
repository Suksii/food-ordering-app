import { prisma } from '@/utils/connection';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: id,
            },
        })
        console.log(product);
        
        return new NextResponse(JSON.stringify(product))
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }),
            { status: 500 }
        )
    }
}