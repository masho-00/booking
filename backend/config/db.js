import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
       console.log('<<<<<mongoDB connected!>>>>>');  
    } catch (error) {
        console.log(error);
        console.log('<<<<<mongoDB disconnected!>>>>>');        
    }    
}