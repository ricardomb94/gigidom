import express from 'express';
const router = express.Router();
//Import controllers
import {guest} from '../controllers/guest.js'
//import Validators 
import {guestValidator} from '../validators/guest.js'
import {runValidation} from '../validators/index.js'


router.post('/guest', guestValidator, runValidation, guest)
  
export default router