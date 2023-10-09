import mongoose from "mongoose";


let isConnected=false;


export const connectToDB=async ()=>{
    mongoose.set('strictQuery',true)


    if(isConnected) {
        console.log("Db Is Connected")
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
           dbName:"share_prompt",
           userNewParser:true,
           useUnifiedTopology:true,

        })
        isConnected=true
        console.log("Mongodb connected")
    }catch(error){
          console.log(error)
    }
}

