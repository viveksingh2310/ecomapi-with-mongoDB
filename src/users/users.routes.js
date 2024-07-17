import { Router } from "express";
import UserController from "./users.controller.js";
const UserRouter=new Router();
UserRouter.get('/',UserController.getUsers);
UserRouter.post('/',UserController.addUser);
UserRouter.post('/check',UserController.checkUser);
UserRouter.post('/signin',UserController.signin,(req,res)=>{
    return res.status(200).send('the user is succesfully logged in')
});
UserRouter.delete('/',UserController.delete);
UserRouter.put('/',UserController.updateUser);
export default UserRouter;