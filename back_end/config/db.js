import {neon} from "@neondatabase/serverless"
import dotenv from "dotenv";

dotenv.config();

//this creates a sql connection using env variables
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
export const sql=neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
)
//sql fun is used as a tagged literal ,which allws to write sql quires
