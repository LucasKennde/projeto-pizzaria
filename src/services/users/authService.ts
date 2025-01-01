import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
interface IAuthRequest{
    email: string;
    password: string;
}
export class AuthUserService {
    async execute({email, password}:IAuthRequest){
        const user = await prismaClient.user.findFirst({
            where: {
                email:email
                }
        })

        if(!user){
            throw new Error("User not found");
        }
        const passwordMatch = await compare(password, user.password)
        if(!passwordMatch){
            throw new Error("Invalid user/password");
            }
            
        return{ok:true}
    }
}