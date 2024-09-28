import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'


dotenv.config({

    path:'./env'
})

connectDB()
.then(
    ()=>{

        app.on("error",(error)=>{
          console.log("ERROR : ",error);
          throw error
        })

        app.listen(process.env.PORT || 8000,'0.0.0.0',()=>{
            console.log(`Server running at port ${8000}`)
        })

        // app.get('/',(req,res)=>{
        //     res.send("Hi")
        // })
    })
    .catch((error)=>{
   console.log("MONGODb connection failed !!!",error);
    })