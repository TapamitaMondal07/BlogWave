import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
  console.log('Mongo Db is connected')
})
.catch(()=>{
  console.log('Error')
})

const app = express();

app.get('/', (req, res)=>{
  res.send("Hi")
})

app.listen(3000, ()=>{
  console.log('Server is running on port 3000');
})