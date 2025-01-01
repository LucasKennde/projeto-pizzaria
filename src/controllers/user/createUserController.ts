import {Response, Request} from 'express'
import { CreateUserService } from '../../services/users/createUserService';
export class CreateUserController{

    async handle(req:Request, res:Response){
        try {
            const { name, email, password } = req.body;
            const createUserService = new CreateUserService();
            const user = await createUserService.execute({
              name,
              email,
              password,
            });
        
            return res.status(201).json(user); 
          } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
    }
}
