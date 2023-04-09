import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
// import route
import guestRoutes from './routes/guest.js';


dotenv.config();

connectDB();

const app = express();

// const Router = express();

// Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    app.use(cors({ origin: `http://localhost:3000` }));
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


if (process.env.NODE_ENV === 'production') {

  const __dirname = path.resolve();
  // Serve static files from the build directory
  app.use(express.static('frontend/build'))

  
    // Serve the index.html file for all other requests
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
      )
      console.log(__dirname)
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....')
    })
  };

  app.use('/api', guestRoutes);

//Start the server
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)