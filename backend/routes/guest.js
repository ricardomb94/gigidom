import express from 'express';
const router = express.Router();
//Import controllers
import {guest} from '../controllers/guest.js'

router.get('/guest', guest)
  
export default router