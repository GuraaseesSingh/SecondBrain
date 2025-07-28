import mongoose, { model,Schema } from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URL!)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));
const UserSchema= new Schema({
     username:{type:String, unique:true}, //mongoose makes the constraint unique:true so no same usernames get to the data 
     password:{type:String}
})
export const UserModel = model("User",UserSchema)
const ContentSchema= new Schema({
    title:{type:String, unique:true},
    link:{type:String, unique:true},
    tags:[{type: mongoose.Types.ObjectId, ref:'Tag'}],
    userId:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
})
export const ContentModel = model("Content",ContentSchema)