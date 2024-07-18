import "./env.js"
import express from 'express'
import bcrypt from 'bcrypt'
import bodyParser from "body-parser"
import {getDB} from './src/config/mongodb.js'
import UserRouter from "./src/users/users.routes.js"
import ProductRouter from "./src/products/product.routes.js"

const app=express();
app.use(express.json())
app.use('/product',ProductRouter);
// app.use(bodyParser);
app.use('/',UserRouter);
app.get('/',async (req,res)=>{
    const db=await getDB();
    const s=await db.collection('products').find().toArray();
    return res.send(s);
});


export default app;