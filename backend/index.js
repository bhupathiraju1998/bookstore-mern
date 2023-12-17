import express, { response } from 'express';
import { PORT } from './config.js';
import mongoose from  'mongoose';
import booksRoute from './routes/booksRoute.js'
import { Book } from './models/bookModel.js';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors());

// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// }))
//allow custom origin


app.get('/',(req,res)=>{
    console.log(req)
    return res.status(201).send('Welcome to MERN stack tutorial')
});

app.use('/books',booksRoute);


mongoose.connect('mongodb://0.0.0.0:27017/bookstoredatabase')
.then(()=>{
    console.log("mongoose connected");
    app.listen(PORT , () => {
        console.log(`port ${PORT}`)
    })
})
.catch(()=>{
    console.log("failed")
})
