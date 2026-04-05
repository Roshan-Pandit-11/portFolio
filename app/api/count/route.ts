import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/prisma";

export async function GET () {
    try {
        let visitor = await prisma.visitor.findFirst() ;

        if (!visitor){
            visitor = await prisma.visitor.create({
                data : {
                    count : 1 
                }
            })
        }else{
            visitor = await prisma.visitor.update({
                where : {
                    id : visitor.id 
                } ,
                data : {
                    count : { increment : 1 }
                }
            })
        }
        return NextResponse.json({
            success : true ,
            count : visitor.count
        })
    } catch (error) {
        return NextResponse.json({
            success : false ,
            error : error
        })
    }
}