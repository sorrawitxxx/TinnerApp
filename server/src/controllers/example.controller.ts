import Elysia,{t} from "elysia"
 export const example = new Elysia()
.get("/", () => "Hello World",{
    detail:{
        tags:["Example"],
        summary:"Get Hello world",
        description:"blal"

    }
})
.post("/about/", ({ body }) =>{
return {
  id: "xxx",
  message:"hello"+ body.name

}
},{
  body:t.Object({
    name: t.String() 
  }),
  detail:{
    tags:["Example"],
    summary:"Get Hello world",
    description:"blal"

}
})
