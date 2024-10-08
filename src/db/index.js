import mongoose from "mongoose"
import {DB_NAME} from '../constants.js'


const connectDB = async function () {

    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://Aditya:aditya123@cluster0.x7jlj.mongodb.net/${DB_NAME}`)
        console.log(`MongoDB connected !! DB HOST ${connectionInstance.connection.host}`)
    } catch (error) {
          console.log('MongoDB connection failed ',error)
          process.exit(1);  
    }
}

export default connectDB