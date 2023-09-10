import { dblink } from "../../../../Lib/db"
import mongoose from "mongoose"
import { NextResponse } from "next/server"
import { Blogs } from "../../../../Lib/Models/productModel"
export async function DELETE(request, content) {
    let id = content.params.bloguid
    console.log(id)
    let record = { _id: id }
    await mongoose.connect(dblink).then(async (val) => {
        console.log('connected')
    })
    try {
        await Blogs.deleteOne(record)
        console.log('delete')
        return NextResponse.json({
            message: "delete data",
            data:[]
        })

    } catch (error) {
        return NextResponse.json({
            message: error.message,
            data:[]

        })
    }
}

export async function GET(request,content){
    let id=content.params.bloguid
    console.log(id)

    let record={_id:id}
await  mongoose.connect(dblink).then(async(val) => {
    console.log('connected 01')
})
    let data =await  Blogs.findOne(record)



    return NextResponse.json({
        message :"get item",
        data:data
    })

}






export async function PUT(request, content) {

    let id = content.params.bloguid
    console.log(id)

    let body = await request.json()
    console.log(body)

    await mongoose.connect(dblink).then(async (val) => {
        console.log("connect")
    })


    try {

        let product = await Blogs.findByIdAndUpdate(id, body)

        console.log("ok update")
        return NextResponse.json({
            message: "save data",
            data: product
        })
    } catch (error) {
        console.log("ok update")

        return NextResponse.json({
            message: error.message,
            data: product
        })

    }

    // let product =await  Product.fde
}



