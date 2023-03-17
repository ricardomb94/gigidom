import {check} from 'express-validator'

exports.guestValidator = [
    check('firstname')
    .not()
    .isEmpty()
    .withMessage('Ce champ est obligatoire'),
    check('lastname')
    .not()
    .isEmail()
    .withMessage('Ce champ est obligatoire'),
    check('tel')
    .not()
    .isLength({maxLength:10})
    .withMessage('Votre numéro doit contenir 10 chiffres'),
]