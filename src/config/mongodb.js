import { MongoClient } from "mongodb";
let client;
const dbName='ecom'//here the ecom would have users, products and cart features as well
 async function connect(){
    client= new MongoClient(process.env.DB_URL);
   await client.connect()
   console.log('connected to database successfully');
}
async function getDB(){
    return await client.db(dbName); 
}
export {connect,getDB}