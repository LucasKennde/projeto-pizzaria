import prismaClient from "../../prisma"
import { hash } from "bcryptjs"
interface IUserRequest{
    name: string,
    email:string,
    password:string
}

export class CreateUserService {


    async execute({name, email, password}:IUserRequest){
        if(!email){
            throw new Error("Email is required")
        }
        const userAlreadyExists =  await prismaClient.user.findFirst({
            where:{email:email}
        })

        if(userAlreadyExists){
            throw new Error("User already exists")
        }
        const hashedPassword = await hash(password, 8)
        const user = await prismaClient.user.create(
            {
                data:{
                    name:name,
                    email:email,
                    password:hashedPassword
                    },
                    select:{
                        id:true,
                        name:true,
                        email:true
                    }
            }
        )
        return user
    }
}