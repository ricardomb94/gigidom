import {check} from 'express-validator'

const guestValidator = [
    check('firstname')
    .not()
    .isEmpty()
    .withMessage('le prénom est obligatoire'),
    check('lastname')
    .not()
    .isEmpty()
    .withMessage('Le nom est obligatoire'),
    check('tel')
    .not()
    .isLength({max:10})
    .withMessage('Votre numéro doit contenir 10 chiffres'),
]

export {guestValidator}