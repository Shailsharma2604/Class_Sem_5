import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name : String,
    price : Number,
    qty: Number,
})

const productModel = mongoose.model("Product", ProductSchema);

export default productModel;