import { getDB } from "../config/mongodb.js";
export default class ProductRepository{
    static async getProducts(){
        const db=await getDB();
        return await db.collection('products').find().toArray();
    }
}