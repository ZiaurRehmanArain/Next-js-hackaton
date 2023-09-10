import mongoose from "mongoose";
import {dblink} from '../../../Lib/db'
import {USERMODLE} from '../../../Lib/Models/userModel'
import { NextRequest, NextResponse } from "next/server";

export async function POST(request,content){

    await mongoose.connect(dblink).then((req)=>{
        console.log('connected')
    })

    let data=await request.json()
    console.log(data)
    // let checker= await USERMODLE.findOne({email: data.email});
    let checker= await USERMODLE.findOne({email: data.email})
    console.log(checker)
    if(checker !=null){
        if(checker.password===data.password){
            return NextResponse.json({
                message: "User Login",
                data: checker
            })
        }else{
            return NextResponse.json({
                message: "please in correct password",
                data:[]
            })
        }
    }else{
        return NextResponse.json({
            message: 'user no found',
            data:[]
        })
    }

}
