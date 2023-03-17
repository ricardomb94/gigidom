import validationResulte from 'express-validator'

exports.runValidation = (req, res, next) => {
    const errors = validationResulte(req)
    if(!error.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()[0].mg
        })
    }
    next()
}