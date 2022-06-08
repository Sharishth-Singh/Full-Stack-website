const express  = require('express') ;
const router = express.Router();
const { signup } = require('../controller/user');


router.post('/signup',signup);
router.post('/signin',(req,res)=>{

});


module.exports = router;
