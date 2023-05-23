import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import generalRoutes from './routes/general.js'
import salesRoutes from './routes/sales.js'
import stockRoutes from './routes/stock.js' 

/* data imports */
import Product from './models/Products.js';
import ProductStat from './models/ProductStat.js';
import {dataProduct, dataProductStat} from "./data/index.js"

dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan('common'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use("/general", generalRoutes)
app.use("/sales",salesRoutes)
app.use("/stock",stockRoutes)

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(()=>{
   app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

   Product.insertMany(dataProduct);
   Product.insertMany(dataProductStat);
   
}).catch((error) => console.log(`${error} did not connect`))