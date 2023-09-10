import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { dblink } from "../../../../Lib/db";
import {USERMODLE} from "../../../../Lib/Models/userModel"

export async function GET(request,content){
    console.log(content.params.uids)
    let id=content.params.uids
    console.log(id)

    let record={_id:id}

    await mongoose.connect(dblink).then((val)=>{
        console.log('connect')
    })
    let datas =await  USERMODLE.findOne(record)


    return NextResponse.json({
        message: "get user",
        data: datas
    })

}



export async function POST(request,content){
    console.log(content.params.uids)
    let id=content.params.uids
    console.log(id)

    let record={_id:id}
    let data =await request.json()

    await mongoose.connect(dblink).then((val)=>{
        console.log('connect')
    })
    let datas =await  USERMODLE.findByIdAndUpdate(record,data)


    return NextResponse.json({
        message: "get user",
        data: datas
    })

}