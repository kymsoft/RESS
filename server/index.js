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
import Auth from './models/auth.js';

dotenv.config();
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan('common'))
app.use(bodyParser.json());
app.use(cors())
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

   //Product.insertMany(dataProduct);
   //ProductStat.insertMany(dataProductStat);
   
}).catch((error) => console.log(`${error} did not connect`))

app.get("/", cors(),(req, res)=>{

})

app.post("/", async(req, res)=>{
   const{username, password} = req.body 

   try{
      const check = await Auth.findOne({username: username})

      if(check){
         res.json("exists")
      }
      else{
         res.json("notexist")
      }
   }
   catch(err){
      res.json("not exist")
   }
})



/*Signup*/


app.post("/signup", async(req, res)=>{
   const{username, password} = req.body 

   const data = {
      username: username,
      password: password
   }

   try{
      const check = await Auth.findOne({username: username})

      if(check){
         res.json("exists")
      }
      else{
         res.json("notexist")
         await Auth.insertMany([data])
      }
   }
   catch(err){
      res.json("not exist")
   }
})
