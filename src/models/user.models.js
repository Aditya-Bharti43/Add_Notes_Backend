import {Schema,mongoose} from "mongoose"

const userSchema = new Schema({
   noteTitle:{
    type:String,
    required:true
   },

   noteContent:{
    type:String,
    required:true,

   },
   reminderDate:{
    type:String,
    required:true,
   },


},{timestamps:true})

export const User = mongoose.model('User',userSchema)