import mongoose from 'mongoose';

const todaySchema = new mongoose.Schema({
    workname:{
        type:String,
        required:true
    },
    start:{
        type:Date,
        required:true
    },
    stop:{
        type:Date,
        required:true
    },
    todo:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"todo"
    }
},{timestamps:true})

export const Today = mongoose.model("today",todaySchema)