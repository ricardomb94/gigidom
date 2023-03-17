// import guest from '../routes/guest.js';


const guest  = (req, res) =>{
    res.json({
        data:"It's working ! "
    })

}

export {guest}




















// import expressAsyncHandler from 'express-async-handler';


// Before we create a new Guest, we to send an object request to the body 

// const addGuest = asyncHandler(async (req, res) => {
//     const{
//         name,
//         mobile,
//         baby,
//         teenager,
//         acceptedInvitation,
//         refusedInvitation
//     } = req.body;

  //We are going to await and take our User Model and
  //find one document by email
//   const guest = await Guest.findOne({mobile});

//     if (name && name.length === 0 ||  name && name.length === 0 || mobile && mobile.length === 0){
//         res.status(400);
//         throw new error("Veuillez renseigner le nom, le prénom et votre numéro de mobile ")
//     }else {
//         //If the guest doesn't exist yet we can create a new one
//         const guest = new Guest ({
//         name,
//         mobile,
//         baby,
//         teenager,
//         acceptedInvitation,
//         refusedInvitation
//         });
//         //After creating we can save the new instance in DB
//         const createGuest = await guest.save();
//         res.status(201).json(createOrder)
//     }
// });

// export{
//     addGuest
// }