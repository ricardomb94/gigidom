import express from 'express';
//Import controllers
import {guest} from '../controllers/guest.js'
//import Validators 
import {guestValidator} from '../validators/guest.js'
import {runValidation} from '../validators/index.js'


const router = express.Router();

router.post('/guest', guestValidator, runValidation, guest)
  
export default router