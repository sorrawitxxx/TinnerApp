import { User } from "../models/user.model";
import { login, register, user } from "../types/account.type";

export const AccountService = {
    createNewUser : async function (registerData:register):Promise<user>{
        const user = await User.findOne({username:registerData.username}).exec()
        if (user)
            throw new Error(`${registerData.username} already exists`)
        const newUser = await User.createUser(registerData)
        return newUser.toUser()
    },
    login: async function (loginData : login):Promise<user>{
        const user = await User.findOne({username:loginData.username})
        .exec()
       
        if(!user)
            throw new Error("User does not exits")
        const verifyPassword =await user.verifyPassword(loginData.password)
        if(!verifyPassword)
            throw new Error("Password is incorrect");
        return user.toUser()        
    },
}
