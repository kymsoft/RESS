import Product from "../models/Products.js";
import ProductStat from "../models/ProductStat.js"

export const getProducts = async(req, res) => {
   try{
      const products = await Product.find();
   } catch(error){
      res.status(404).json({message: error.message});
   }
}