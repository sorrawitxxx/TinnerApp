import { connect } from "bun"
import mongoose from "mongoose"

const username = Bun.env.MONGO_DB_USERNAME || 'sorrawit'
const password = Bun.env.MONGO_DB_PASSWORD || 'seesawat1'
const db_name = Bun.env.MONGO_DB_DBNAME || 'tinner_app'

const uri = `mongodb+srv://${username}:${password}@cluster0.yhqnz.mongodb.net/?retryWrites=true&w=majority&appName=${db_name}`

export const MongoDB = {
connect : async function(){
        try {
            
            await mongoose.connect(uri)
            console.log(" --- MongoDB Connected --- ");
            
        } catch (error) {
            console.error(" --- MongoDB Connection Error",error);
            console.error(" error ",error);
            
            
        }
    }
}