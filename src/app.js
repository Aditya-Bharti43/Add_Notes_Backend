import express from 'express'
import cors from 'cors'


const app = express();
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

import userRouter from './routes/user.routes.js'

// routes declaration
// since we have separated our files we can't use app.get() method directly , so we use middlewares.

app.use("/api/v1/users",userRouter)

export {app}