import mongoose from "mongoose";
import dotenv from "dotenv";
import config from "config";

dotenv.config()

console.log(process.env.mongoURI);
console.log(config.get('mongoURI'))

export async function connect() {
    try {
        await mongoose.connect(process.env.mongURI)
        console.log("MongoDB connected");
    } catch (err) {
        console.log(err);
    }
}


