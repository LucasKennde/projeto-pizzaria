import prismaClient from "../../prisma"

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
        const user = await prismaClient.user.create(
            {
                data:{
                    name:name,
                    email:email,
                    password:password
                    }
            }
        )
        return user
    }
}