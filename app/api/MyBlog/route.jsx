import mongoose from "mongoose"
import { dblink } from "../../Lib/db"
import { Blogs } from "../../Lib/Models/productModel"
import { NextResponse } from "next/server"

export async function POST(request, content) {

    await mongoose.connect(dblink).then((val) => {
        console.log("test connect")
    })

    let body = await request.json()

    if (!body.name || !body.image || !body.userid) {

        return NextResponse.json({
            message: "Missing Required Field"
        })

    }
    else {

        let res = Blogs(body)
        await res.save()

        return NextResponse.json({
            message: "add new res",
            data: res
        })


    }


    return NextResponse.json({
        message: "test"
    })
}
