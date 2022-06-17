const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.signup = (req,res) => {
   User.findOne({email: req.body.email})
      .exec((error,user)=>{
         if(user) return res.status(400).json({
            message: 'User already register'
         });
         const {
            firstName,
            lastName,
            email,
            password
         } = req.body;
         const _user = new User({
            firstName,
            lastName,
            email,
            password,
            username: Math.random().toString()
         });
         _user.save((error, data)=>{
            if(error){
               return res.status(400).json({
                  message: 'Something Is Wrong'
               });
            }
            if(data){
               return res.status(201).json({
                  message: 'User Created Successfully..!'
               })
            }
         });
      });
}


exports.signin = (req, res) => {
   User.findOne({ email: req.body.email})
      .exec((error, user) => {
         if(error){
            return res.status(400).json({error});
         }
         if(user)
         {
            if(user.authenticate(req.body.password)){
               const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
               const {_id, firstName, lastName, email, role, FullName} = user;
               res.status(200).json({
                  token,
                  user: {
                     _id, firstName, lastName, email, role, FullName
                  }
               });
            }else{
               return res.status(400).json({
                  message: 'Invalid Password'
               });
            }
         }else{
            return res.status(400).json({message: 'Something went wrong'});
         }
      });
}
