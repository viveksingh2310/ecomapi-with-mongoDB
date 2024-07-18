import ProductRepository from "./products.repository.js"
export default class ProductController{
   static async getAll(req,res){
   const result=await ProductRepository.getProducts()
   if(!result)
    return res.status(400).send('no product found')
return res.status(200).send(result)
    }
    static async addProduct(req,res){
        const result=await ProductRepository.addProduct(req.body);
        if(!result)
            return res.status(400).send('a bad request');
        return res.status(200).send(result);
    }
    static async updateProduct(req,res){
        const {id,product}=req.body;
        const result=await ProductRepository.update(id,product);
        if(!result) 
            return res.status(400).send('product does not exist')
        return res.status(200).send(result)
    }
    static async delete(req,res){
        const {id}=req.body;
        const result=await ProductRepository.remove(id);
        if(!result)
            return res.status(400).send('product not found')
        return res.status(200).send(result)
    }
}