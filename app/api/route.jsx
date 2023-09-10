import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    mongoose.connect("mongodb+srv://minihacktakon:minihacktakon@cluster0.bt3n1oe.mongodb.net/?retryWrites=true&w=majority").then((res)=>{
        console.log('connect')
    })

    return NextResponse.json({
        message: 'connected'
    })
}