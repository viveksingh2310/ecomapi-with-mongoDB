import UserRepository from "./users.repository.js"
import bcrypt from 'bcrypt'
export default class UserModel{
    constructor(name,email,pass,address,phone,isSeller,isPremium){
        this.name=name
        this.email=email
        this.address=address
        this.pass=pass
        this.phone=phone
        this.isSeller=isSeller
        this.isPremium=isPremium
    }
    static async addUser(userData){
        const {name,email,pass,address,phone,isSeller,isPremium}=userData;
        let newUser;
       await bcrypt.hash(pass,8).then(function(hash){
        newUser=new UserModel(name,email,hash,address,phone,isSeller,isPremium);
       })
        return newUser;
    }
    static async checkUser(email){
        const result=await UserRepository.findUser(email);
        if(!result)
            return;
        return result;
    }
    static async update(id,name,email,pass,address,phone,isSeller,isPremium){
        const result=await UserRepository.updateUser(id,name,email,pass,address,phone,isSeller,isPremium);
        if(!result)
            return
        return result;
    }
}