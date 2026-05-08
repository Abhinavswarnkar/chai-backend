// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path : './ .env'
})

connectDB()



/*
const app= express()

;(async ()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)

    app.on("errror",(error)=>{
      console.log('ERRROR:',error)
      throw error
    })

    app.listen(process.env.PORT,()=>{
      console.log(`app is listening to ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("ERROR:",error)
  }
})()  
  */