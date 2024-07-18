export default class ProductModel{
    constructor(name,desc,price,likes,ratings,manfacturedIn,size){
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.likes=likes;
        this.ratings=ratings;
        this.manfacturedIn=manfacturedIn;
        this.size=size;
    }
    static addProduct(productInfo){
        const{name,desc,price,likes,ratings,manfacturedIn,size}=productInfo;
        const newProduct=new ProductModel(name,desc,price,likes,ratings,manfacturedIn,size);
        return newProduct;
    }
}