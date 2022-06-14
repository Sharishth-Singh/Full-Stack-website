const { check,validationResult } = require('express-validator');

exports.validateSignupRequest = [
   check('firstName')
   .notEmpty()
   .withMessage('FirstName is required'),
   check('lastName')
   .notEmpty()
   .withMessage('LastName is required'),
   check( 'lastName' ),
   check('email')
   .isEmail()
   .withMessage('email is required'),
   check('password')
   .isLength({ min: 6 })
   .withMessage('Password is required'),
];

exports.validateSigninRequest = [
   check('email')
   .isEmail()
   .withMessage('email is required'),
   check('password')
   .isLength({ min: 6 })
   .withMessage('Password is required'),
];
exports.isRequestValidated = (req,res,next) => {
   const errors = validationResult(req);
   if(errors.array().length > 0){
      return res.status(400).json({ error: errors.array()[0].msg })
   }
   next();
}
