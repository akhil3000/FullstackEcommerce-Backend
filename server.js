import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/productRoutes.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
dotenv.config();
const port=process.env.PORT||5000;
connectDB();
const app=express();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('API is running');
})

app.use('/api/products',router);
app.use(notFound);
app.use(errorHandler);


app.listen(port,()=>console.log(`Server running on port${port}`))