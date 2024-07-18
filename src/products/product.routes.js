import { Router } from "express"
import ProductController from "./product.controller.js"
const ProductRouter=new Router()
ProductRouter.get('/',ProductController.getAll);
ProductRouter.post('/',ProductController.addProduct);
ProductRouter.put('/',ProductController.updateProduct);
ProductRouter.delete('/',ProductController.delete);
export default ProductRouter