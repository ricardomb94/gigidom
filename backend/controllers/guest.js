import Guest from '../models/guest.js'
import asyncHandler from "express-async-handler";
import sgMail from '@sendgrid/mail';

const guest = asyncHandler(async (req, res) => {
  const { statut, firstname, lastname, tel, email, baby, teenager } = req.body;

  // Check if the guest already exists
  const existingGuest = await Guest.findOne({ tel });
  if (existingGuest) {
    return res.status(400).json({
      error: "Ce numéro de téléphone est déjà pris"
    });
  }

  // Create a new guest object and save it to the database
  const newGuest = new Guest({ statut, firstname, lastname, tel, email, baby, teenager });
  await newGuest.save();

  // Send a success response
  res.json({
    message: `Bonjour ${firstname} Merci d'avoir rempli le formulaire`
  });

  //send the new guest by email
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'ogi_@hotmail.fr', // Change to your recipient
  from: 'progricdev@gmail.com', // Change to your verified sender
  subject: 'Retour invitation',
  text: 'Dom et moi',
  html: ` Bonjour Ogilvie ! <br> A l'occasion de ton mariage moi : <strong> ${firstname} ${lastname} je serai ${statut}(e) , </strong>. <br> Je accompagné(e) de: <strong> ${baby} enfant en bas âge (ou un bébé) et ${teenager} adolescent.</strong> <br> Voici mes coordonnées: <br> - Téléphone : <strong>${tel}</strong> <br> - E-mail : <strong>${email}</strong`,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
});

//Display a guest list
const guestList = asyncHandler(async(req, res)=>{
  const guests = await Guest.find({})
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(guests)

})
export {guest, guestList}













