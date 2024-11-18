import mongoose from "mongoose";

export const connection = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "JOB_PORTAL_WITH_AUTOMATION"
    }).then(()=>{
        console.log("Connected to MongoDB DATABASE");
    }).catch(err=>{
        console.log(`some occurend while connecting to database: $(err)`);
    })
}