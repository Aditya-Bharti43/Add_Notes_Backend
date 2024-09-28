import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";


const addNotes = asyncHandler( async(req,res)=>{
    // What to do in this controller
    // Take input from user 
    // Store the data in database
    // handle the update and delete requests of the user

    const {noteTitle,noteContent,reminderDate}=req.body
    // console.log(noteContent)

    if (
        [noteTitle, noteContent, reminderDate].some((field) =>
            field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }


   const user = await User.create({
          noteContent,
          noteTitle,
          reminderDate 
    })

    // checking whether user is created or not in database
    // checking by unique id: _id 

    const createdUser=await User.findById(user._id)

    if(!createdUser)
    {
        throw new ApiError(401,"Something went wrong while creating the user")
    }


    return res
    .status(200)
    .json(new ApiResponse(201,createdUser,"Notes added Successfully"))

})

export {addNotes}