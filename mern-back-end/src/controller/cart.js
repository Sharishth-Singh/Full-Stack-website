const Cart = require('../models/cart');

exports.addItemToCart = (req,res) => {
   Cart.find({ user: req.user._id })
      .exec((error,cart) => {
         // return res.json({cart});
         if(error) return res.status(400).json({error});
         if(cart.length !== 0){
            // already exixt
            const product = req.body.cartItems.product;
            const item = cart[0].cartItems.find(c => c.product == product);
            if(item){
               Cart.findOneAndUpdate({ "user": req.user._id, "cartItems.product": product }, {
                  "$set": {
                     "cartItems": {
                        ...req.body.cartItems,
                        quantity: item.quantity + req.body.cartItems.quantity
                     } 
                  }
               })
                  .exec((error, _cart) => {
                     if(error) return res.status(400).json({error});
                     if(_cart) return res.status(201).json({_cart});
                  })
               // res.status(200).json({message: cart})
            }else{
               Cart.findOneAndUpdate({ "user": req.user._id }, {
                  "$push": {
                     "cartItems": req.body.cartItems 
                  }
               })
                  .exec((error,_cart) => {
                     if(error) return res.status(400).json({error});
                     if(_cart) return res.status(201).json({cart: _cart});
                  })
            // res.status(200).json({message: cart})
            }

         }else{
            // false new cart
            const cart = new Cart({
               user: req.user._id,
               cartItems: req.body.cartItems 
            });
            // return res.status(400).json({message: "no"});
            cart.save ((error,cart) =>{
               if(error) {
                  return res.status(400).json({error}) 
               };
               if(cart) {
                  return res.status(201).json({cart});
               }
            });
         }
      });
};
