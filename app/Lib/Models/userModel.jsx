import mongoose from "mongoose";

let userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    image:String
})


if( mongoose.models["usersData"]){
    delete  mongoose.models["usersData"]

}

export const USERMODLE=mongoose.model("usersData",userSchema)