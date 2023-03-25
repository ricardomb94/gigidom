import {check} from 'express-validator'

const guestValidator = [
    check('statut')
    .not()
    .isEmpty()
    .withMessage('Le statut est obligatoire'),
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
    .isEmpty()
    .matches(/[0-9]{10}/)
    .withMessage('Votre numéro doit contenir 10 chiffres'),
]

export {guestValidator}