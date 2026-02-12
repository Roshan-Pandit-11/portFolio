import { NextRequest, NextResponse } from "next/server";

let count = 0 ;
export function GET () {
    count++ ;
    return NextResponse.json({
        count
    }) ;
}