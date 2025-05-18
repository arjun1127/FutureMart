import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import productRoute from "./routes/productRoutes.js";
import {sql} from "./config/db.js";
import {aj} from "./lib/arcjet.js";

dotenv.config();

const app=express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(helmet());//security middleware as it provides various HTTP headres
app.use(morgan("dev"));//log the requests if 200 OK all ok

//arject rate limit to all routes
app.use(async(req, res, next) =>{
    try{
        const decision=await aj.protect(req,{
            requested:1,//specifies each token consumes 1 token
        })
        if(decision.isDenied()){
            if(decision.reason.isRateLimit()){
                res.status(429).json({message:"Rate limit exceeded"})
            }else if(decision.reason.isBot()){
                res.status(403).json({message:"Bot detected"})
            }
            return
        }
        //check for spoofed bots
        if(decision.results.some((result)=>result.reason.isBot() && result.reason.isSpoofed())){
            res.status(403).json({error:"spoofed bot detected"});return 
        }

        next()
    }catch(e){
        console.error("Arcjet error ",e);
        next(e);
    }
})

app.use("/api/products",productRoute)

async function initDb(){
    try{
        await sql `
            CREATE TABLE IF NOT EXISTS products(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image_url VARCHAR(255) NOT NULL,
            price DECIMAL(10,2) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `
        console.log("db init success");
    }catch(e){
        console.log("error in intiDb ",e)
    }
}

initDb().then(()=>{
    app.listen(PORT,()=>{
        console.log("server is running on port " + PORT);
    })
})