import mongoose from "mongoose";


export async function Conection(){
    try{
        mongoose.connect(process.env.MONGO_URL)

        const connection = mongoose.connection

        connection.on(('connected',()=>{
            console.log("mongodb connected")

        }))

        connection.on(('error', (error)=>{
            console.log("mongodb error" + error)
            process.exit()
        }))
            
        
    }catch(error){
        console.log("Something went Wrong",error)

    }

}