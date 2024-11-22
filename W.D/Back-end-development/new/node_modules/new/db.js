import mongoose from "mongoose";

async function connectToDb() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/db1")
        console.log("connected to db")
    } catch (err) {
        console.log("Error: ", err)
    }
}