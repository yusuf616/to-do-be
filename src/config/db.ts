import mysql2 from "mysql2"
import dotenv from "dotenv"


dotenv.config();



const db=mysql2.createConnection({
    host:process.env.DB_HOST||"localhost",
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || "12345678",
    database: process.env.DB_NAME || 'todo'
});


db.connect((err)=>{
    if(err) throw err

    console.log( "Database is Connected");
})


export {db}


