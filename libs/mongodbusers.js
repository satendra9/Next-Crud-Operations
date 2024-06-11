import mongoose from "mongoose";

const connectMongoDBUsers = async () => {
    try{
        mongoose.createConnection(process.env.MONGOREG_URI).asPromise();
        console.log("Connected to MongoDB");
    }catch(error){
        console.log(error);
    }
}

export default connectMongoDBUsers;