import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DB_URI =  process.env.MONGODB_URI
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(DB_URI)
       
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB