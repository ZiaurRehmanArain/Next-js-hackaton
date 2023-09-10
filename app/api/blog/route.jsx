import mongoose from "mongoose";
import { dblink } from "../../Lib/db";
// import { connected } from "process";
import { NextResponse } from "next/server";
// import {Products} from "@/app/Lib/Models/productModel"
import { Blogs } from "../../Lib/Models/productModel";


export async function POST(request,content){
   await  mongoose.connect(dblink).then((v)=>{
        console.log("connected")
    })
    let data = await request.json()
    let result = Blogs(data)
     await result.save()
     console.log(result)

     return NextResponse.json({
        message :"api connect",
        data:result
     })

}
export async function GET(){
   await  mongoose.connect(dblink).then((v)=>{
        console.log("connected")
    })
    let result =await Blogs.find()
    // await result.find()
    console.log(result)
     return NextResponse.json({
        message :"get data connect",
        data: result
     })

}