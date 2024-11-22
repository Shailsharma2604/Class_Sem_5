import mongoose from "mongoose";
const AdminSchema = mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    name: String,
    created:{type:Date, default: new Date()}
})

const AdminModel = mongoose.model("user", AdminSchema)

module.exports = {
    "AdminModel":AdminModel
}