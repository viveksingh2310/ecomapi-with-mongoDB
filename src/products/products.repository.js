import { ObjectId } from "mongodb";
import { getDB } from "../config/mongodb.js";
import ProductModel from "./product.model.js";
export default class ProductRepository{
    static async getProducts(){
        const db=await getDB();
        return await db.collection('products').find().toArray();
    }
    static async addProduct(productData){
        const db=await getDB();
        const newProduct=ProductModel.addProduct(productData);
        return await db.collection('products').insertOne(newProduct);
    }
    static async update(id,product){
        const db=await getDB();
        // const {}
        const result=await db.collection('products').findOneAndUpdate({_id:new ObjectId(id)
        },{$set:product},{returnOriginal:true});
        // console.log(result);
        if(!result)
            return;
        return result;
    }
    static async remove(id){
        const db=await getDB();
        const deletedProduct=await db.collection('products').findOneAndDelete({_id:new ObjectId(id)});
        if(!deletedProduct)
            return
        return deletedProduct;
    }
}