import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
title:{
    type:String,
    required:true,
    unique:ture
},
desc:{
    type:String,
    required:false,
    unique:ture

},
photo:{
    type:String,
    required:false,
},
username:{
    type:String,
    required:true,
},
userId:{
    type:String,
    required:true,
},
categorie:{
    type:String,
    required:true,
},

})

const Post = new mongoose.model("Post",PostSchema)

export default Post;