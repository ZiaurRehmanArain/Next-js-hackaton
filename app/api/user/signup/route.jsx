import mongoose from "mongoose";
import { dblink } from "../../../Lib/db";
// import { request } from "http";
import { USERMODLE } from "../../../Lib/Models/userModel";
import { NextResponse } from "next/server";

export async function POST(request,content){
   await mongoose.connect(dblink).then((res)=>{
        console.log('connect')
         })

         let data= await request.json()
       

         console.log(data)
          let checker= await USERMODLE.findOne({email: data.email})
          console.log(checker)
          if(checker != null){
            return NextResponse.json({
                message:"user already exist",
                data:checker
            })
          }else{
            let result=USERMODLE(data)
           await result.save()
            return NextResponse.json({
                message: "User Regsister",
                data: result
            })
          }

}