import express from 'express' ;
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Utils/db.js';
dotenv.config({});

const app = express();
app.get("/home" ,(req,res)=> {
    return res.status(200).json({
        message : "I am coming fron backend",
        success : true
    })
})
const Port = process.env.PORT || 3000;

const corsOptions = {
    origin : 'http//localhost:5173',
    Credentials : true
}
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({extended : true}));
app.use(cookieParser);


app.listen(Port , () => {
    connectDB();
    console.log("server running at port ", Port);
})