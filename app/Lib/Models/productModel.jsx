import mongoose from "mongoose";

let blogSchema=mongoose.Schema({
    name:String,
    description:String,
    image:String,
    userid:String
})
if(mongoose.models["Blog"]){
    delete mongoose.models["Blog"]
}
export const Blogs=mongoose.model("Blog",blogSchema)