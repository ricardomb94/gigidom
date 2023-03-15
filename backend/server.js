import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import path from 'path';
import {createProxyMiddleware} from 'http-proxy-middleware'

dotenv.config();

connectDB();

const app = express();

// Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};

app.use(express.json());
app.use(cors());

app.use(
    createProxyMiddleware("/", {
      target: "http://127.0.0.1:3000/",
    })
  );




if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
  }


app.get('/', (req, res) => {
res.send('API is running....')
})


//Start the server
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `App running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)