import Elysia, { error } from "elysia";
import { jwtConfig } from "../configs/jwt.config";
import { AccountDto } from "../types/account.type";
import { AccountService } from "../services/account.service";

export const AccontController = new Elysia({
    prefix:"/api/account",
    tags:["Account"]
})
.use(jwtConfig)
.use(AccountDto)

.post("/register",async ({body,jwt,set})=>{
    try{
        const user = await AccountService.createNewUser(body)
        const token = await jwt.sign({ id : user.id})
        return {token,user}
    } catch(error){
        set.status=400
        if (error instanceof Error)
            throw new Error(error.message)
        set.status = 500
        throw new Error("Something went wrong try again laster!!!!")

    }
},{
    body :"register",
    response :"account",
    detail:{
        summary:"Create new User"
    },
    beforeHandle: ({ body: { username, password }, set }) => {
        const usernameRegex = /^[A-Za-z][A-Za-z\d]{3,9}$/
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/
        if (!usernameRegex.test(username) || !passwordRegex.test(password)) {
            set.status = "Bad Request"
            throw new Error(`Invalid username or password`)
        }
    },

 })