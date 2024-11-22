import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
    email: { type: String, unique: true },
    password: String,
    name: String,
    products: mongoose.Schema.Types.ObjectId,
    created:{type:Date, default: new Date()}
})

const UserModel = mongoose.model("user", UserSchema)

module.exports = {
    "UserModel":UserModel
}