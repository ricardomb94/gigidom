import Guest from '../models/guest.js'
import asyncHandler from "express-async-handler";


const guest = asyncHandler(async (req, res) => {
  const { statut, firstname, lastname, tel, baby, teenager } = req.body;

  // Check if the guest already exists
  const existingGuest = await Guest.findOne({ tel });
  if (existingGuest) {
    return res.status(400).json({
      error: "Ce numéro de téléphone est déjà pris"
    });
  }

  // Create a new guest object and save it to the database
  const newGuest = new Guest({ statut, firstname, lastname, tel, baby, teenager });
  await newGuest.save();

  // Send a success response
  res.json({
    message: `Bonjour ${firstname} Merci d'avoir rempli le formulaire`
  });
});

export {guest}













