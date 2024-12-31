import {Response, Request} from 'express'
import { CreateUserService } from '../../services/users/createUserService';
export class CreateUserController{

    async handle(req:Request, res:Response){
        const {name, email, password} = req.body;
        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name,
            email,
            password}
        );
        return res.json(user)
    }
}
