import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
   {
      productId: String,
      yearlySalesTotal: Number,
      yearlyTotalSoldWholesale: Number,
      yearlyTotalSoldRetail: Number,
      year: Number,
      monthlyData: [
         {
            month: String,
            totalSales: Number,
            totalWholesaleUnits: Number,
            totalRetailUnits: Number,
         }
      ], 
      dailyData: [
         {
            date: String,
            totalSales: Number,
            totalWholesaleUnits: Number,
            totalRetailUnits: Number,
         }
      ]
   },
   { timestamps: true }
);

const ProductStat=mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;