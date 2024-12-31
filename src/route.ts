import {Request, Response, Router} from 'express';
import { CreateUserController } from './controllers/user/createUserController';
const router = Router();
const createUserController = new CreateUserController()
router.post('/users',(req:Request, res:Response)=>{
    createUserController.handle(req, res)
})

export {router}