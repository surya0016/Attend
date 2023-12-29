import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

export const Todo = mongoose.model("todo", todoSchema);