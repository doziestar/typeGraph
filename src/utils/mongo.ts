import mongoose from "mongoose";
import dotenv from "dotenv";
import config from "config";

dotenv.config()

export async function connect() {
    try {
        await mongoose.connect(`mongodb://${config.get("DB_HOST")}:${config.get("DB_PORT")}/${config.get("DB_NAME")}`);
        console.log("MongoDB connected");
    } catch (err) {
        console.log(err);
    }
}


