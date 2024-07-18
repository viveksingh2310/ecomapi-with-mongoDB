import { Router } from "express"
import ProductController from "./product.controller.js"
const ProductRouter=new Router()
ProductRouter.get('/',ProductController.getAll)
export default ProductRouter