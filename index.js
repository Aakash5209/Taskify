import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import Connection from './database/db.js';
import Routes from './routes/route.js';
import path from 'path'
const app = express();
dotenv.config()

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

const PORT = process.env.PORT ||  8000;

Connection();
//server production assets
if(process.env.Node_ENV ==='production'){
    app.use(express.static("client/build"))
    
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));