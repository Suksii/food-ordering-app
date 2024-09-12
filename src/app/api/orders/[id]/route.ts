import { prisma } from '@/utils/connection';
import { NextRequest, NextResponse } from 'next/server';

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    try {
        const body = await req.json();
        await prisma.order.update({
            where: {
                id: id,
            },
            data: { status: body },
        })
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }),
            { status: 500 }
        )
    }
}