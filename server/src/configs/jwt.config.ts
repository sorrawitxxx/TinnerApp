import jwt from "@elysiajs/jwt";

export const jwtConfig = jwt({
    name :"jwt",
    secret : Bun.env.JWT_SECRET || "dakosdksaldkalsl",
    exp:"1d"
})