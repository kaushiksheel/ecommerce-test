// import { FirestoreAdapter } from "@auth/firebase-adapter";

import { PrismaClient } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";


const  prisma=new PrismaClient()


export async function POST(request:NextRequest){
    const body=await request.json()
    const users=await prisma.cart.findMany()
    
           console.dir(users)

return NextResponse.json(users,{status:201})
}




