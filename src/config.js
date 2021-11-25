import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path:path.join(process.cwd(), 'src','.env')})
const host = 'localhost'
const PORT = process.env.PORT || 8000
const PRIVATE_KEY = 'nmadr'


const pgConfig = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
}


export {
    host,
    PORT,
    PRIVATE_KEY,
    pgConfig
}