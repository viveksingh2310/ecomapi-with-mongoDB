import { getDB } from "../config/mongodb.js"
import UserModel from "./users.model.js"
import { ObjectId, ReturnDocument } from "mongodb"
import bcrypt from 'bcrypt'
export default class UserRepository{
   static async getUsers(){
    const db=await getDB()
    console.log('inside the user repository')
    return await db.collection('users').find().toArray()
    }
    static async addUser(userData){
   const newUser=await UserModel.addUser(userData)
//    console.log('inside the repository',newUser);
   const db=await getDB()
  return await db.collection('users').insertOne(newUser);
    }
    static async findUser(email){
        const db=await getDB()
        const result=await db.collection('users').find({email:email}).toArray()
        if(result.length==0)
            return
        return result
    }
    static async removeUser(email){
        const db=await getDB();
       return await db.collection('users').findOneAndDelete({email:email});
    }
    static async updateUser(id,name,email,pass,address,phone,isSeller,isPremium){
        const db=await getDB();
        // const {name,email,pass,address,phone,isSeller,isPremium}=userInfo;
        // const user=await db.collection('users').find({"_id":new ObjectId(id)});
        const updatedUser=await db.collection('users').findOneAndUpdate({_id:new ObjectId(id)},{$set:{name,email,pass,address,phone,isSeller,isPremium}},{returnOriginal:true})
       console.log(updatedUser);
        if(!updatedUser)
            return;
        return updatedUser;
    }
}