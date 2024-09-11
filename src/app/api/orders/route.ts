import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/utils/connection";
import { getAuthSession } from "@/utils/auth";


export const GET = async (req:NextRequest) => {
    
    const session = await getAuthSession()
    if(session) {
        try {
            if(session.user.isAdmin) {
                const orders = prisma.order.findMany()
                return new NextResponse(JSON.stringify(orders), { status: 200 })
            }
            const orders = prisma.order.findMany({
                where: {
                    userEmail:session?.user?.email!
                }
            })
            return new NextResponse(JSON.stringify(orders), { status: 200})
        } catch (err) {
            return new NextResponse(
                JSON.stringify({message: "Internal server error"}),
                {status: 500}
            );
        }
    } else {
        return new NextResponse(
        JSON.stringify({ message: "You are not authentificated!" }),
         {status: 401}
         );
    }
}