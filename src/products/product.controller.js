import ProductRepository from "./products.repository.js"
export default class ProductController{
   static async getAll(req,res){
   const result=await ProductRepository.getProducts()
   if(!result)
    return res.status(400).send('no product found')
return res.status(200).send(result)
    }
}