import mongoose from "mongoose"
import { dblink } from "../../../Lib/db"
import { NextResponse } from "next/server"
import {Blogs} from '../../../Lib/Models/productModel'
export async function GET(request,content) {
    console.log(content.params.userid)

    await mongoose.connect(dblink).then((val) => {
        console.log("test connect")
    })

    let checkuser = await Blogs.find({ userid: content.params.userid })

    console.log(checkuser)

    if(checkuser!=null){
        return NextResponse.json({
            data: checkuser,
            message: "GET Your RES"
        })

    } else{
        return NextResponse.json({
            data:[],
            message: "Not add any res"
        })
}}

