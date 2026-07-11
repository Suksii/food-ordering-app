import { getAuthSession } from '@/utils/auth';
import { prisma } from '@/utils/connection';
import { NextRequest, NextResponse } from 'next/server';

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    const session = await getAuthSession();

    if (!session?.user.isAdmin) {
        return new NextResponse(
            JSON.stringify({ message: "You are not allowed!" }),
            { status: 403 }
        )
    }
    try {
        const body = await req.json();
        if (typeof body !== "string" || !body.trim()) {
            return new NextResponse(
                JSON.stringify({ message: "Status must be a non-empty string!" }),
                { status: 400 }
            )
        }
        await prisma.order.update({
            where: {
                id: id,
            },
            data: { status: body.trim() },
        })
        return new NextResponse(
            JSON.stringify({ message: "Order has been updated!"})
        )
    } catch (error) {
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }),
            { status: 500 }
        )
    }
}
