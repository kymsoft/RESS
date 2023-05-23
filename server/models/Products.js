import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
   {
      name: String,
      price: Number,
      description: String,
      currentWholesaleAmount: Number,
      currentRetailAmount: Number,
      wholesaleUnit: String,
      retailUnit: String,
   },
   { timestamps: true }
);

const Product=mongoose.model("Product", ProductSchema);
export default Product;