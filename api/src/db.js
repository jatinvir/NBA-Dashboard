import dotenv from 'dotenv';
import postgres from 'postgres';

dotenv.config();

const pool = postgres({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

export default pool;