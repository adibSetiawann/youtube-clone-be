import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true,
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    imgUrl:{
        type:String,
        required:true,
    },
    videoUrl:{
        type:String,
        required:true,
    },
    views:{
        type:Number,
        default:0
    },
    tags:{
        type:[String],
        defailt:[]
    },
    likes:{
        type:[String],
        defailt:[]
    },
    dislikes:{
        type:[String],
        defailt:[]
    }
}, {timestamps: true })

export default mongoose.model("Video", VideoSchema)