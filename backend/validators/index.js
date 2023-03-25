import {validationResult} from 'express-validator'

const runValidation = (req, res, next) => {
    const errors = validationResult(req)
    console.log('---ERRORS---', errors)
    if(!errors.isEmpty()) {
        return res.status(422).json({
            customMessage:"Error sur le format de données",
            error: errors.array()[0].msg
        })
    }
    next()
}

export {runValidation}