import bcrypt from 'bcrypt'
import UserRepository from "./users.repository.js";
import UserModel from "./users.model.js";
export default class UserController{
    static async getUsers(req,res){
        const result=await UserRepository.getUsers();
        console.log('inside the user controller')
        if(!result)
            return res.status(400).send('data not found');
        return res.status(200).send(result)
    }
    static async addUser(req,res){
       const result=await UserRepository.addUser(req.body);
       if(!result)
        return res.status(400).send('a bad request')
    return res.status(200).send(result)
    }
    static async checkUser(req,res,next){
        const {email}=req.body;
        const result=await UserModel.checkUser(email);
        if(!result)
            return res.status(400).send('user not found')
        return res.status(200).send(result);
    }
    static async signin(req,res,next){
            const{email,pass}=req.body;
            const user=await UserModel.checkUser(email);
            bcrypt.compare(pass,user[0].pass,function(err,result){
                if(result)
                    next();
                return res.status(400).send('user not registered')
            });
    }
    static async delete(req,res){
        const {email}=req.body;
        const result=await UserRepository.removeUser(email);
        if(!result)
            return res.status(400).send('deletion process is not successfull')
        return res.status(200).send(result);//the operation that is returned after the deletion process
    }
    static async updateUser(req,res){//{"id":--id--,{ "name":--name--,...}}
        const {id,name,email,pass,address,phone,isSeller,isPremium}=req.body;
        const result=await UserModel.update(id,name,email,pass,address,phone,isSeller,isPremium);
        if(!result)
            return res.status(400).send('updation failed')
        return res.status(200).send(result);
    }

}