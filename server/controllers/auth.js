const User = require('../models/user')

const AWS = require('aws-sdk')

const jwt = require('jsonwebtoken')

const { expressjwt: expressJwt } = require('express-jwt')

const { nanoid } = require('nanoid')

const regiterEmailParams = require('../helpers/email')

AWS.config.update(

    {
        accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
        secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION 
        
    }

)

const ses = new AWS.SES({ apiVersion: '2010-12-01'})


exports.registerController = (req, res,next) => {

   console.log(req.body);

   const {name, email, password} = req.body

   // check if user exist in our database

   User.findOne({email}).exec((err,user)=>{

       if(user){
         
        return res.status(400).json({
            
            error: 'Email is already taken :('
        })

       }

       //generate web token with user name email and password

        const token = jwt.sign({name,email,password}, process.env.JWT_ACCOUNT_ACTIVATION, {
           expiresIn: '10m'
       });

       //send email

       const params = regiterEmailParams(email,token)

      
       const sendEmailonRegister = ses.sendEmail(params).promise()

    
       sendEmailonRegister.then(data=>{
           console.log('email submitted to SES',data);
           res.json({

               message: `Email has been sent to ${email}, Follow the instructions to complete registration`
           })
       })
       .catch(error=>{
    
            console.log('ses email on register', error);
            res.json({

                message: `could not complete your registration, please try again`
                
            })
    
       })
    

   })

  
};






// activate new register



 exports.registerActivate = (req,res) =>{

    const {token} = req.body

    jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, function(err, decoded){

        if(err){

            return res.status(401).json({

                error: 'Link Expired, Try again'

            })
        }


        const {name, email, password} = jwt.decode(token);

        console.log(name,email, password);

        const userName = nanoid() 

        
        console.log(userName);

        User.findOne({email}).exec((err,user)=>{

            // if user already exist : 

            if(user){

                return res.status(401).json({

                    error:'Email is already taken'

                })
            }

            // create new user :

            const newUser = new User({userName, name, email, password})

            newUser.save((err, result)=>{

                if(err){

                    return res.status(401).json({

                        error: 'Error saving user in database, try later'

                    })

                    //

                }

                return res.json({

                    message: 'Registration complete. Please login'

                })

            })


        })
    })
 

}





// Login 



exports.registerLogin = (req,res)=>{

    const {email, password} = req.body

    

    User.findOne({email}).exec((err,user)=>{

        if(err || !user){
            return res.status(400).json({
                error: ' User with that email does not exist, Please Sign Up'
            })
        }

        if(!user.authenticate(password)){
            return res.status(400).json({
                error:'Email and password do not match'
            })
        }

        //generate token and send to client

        const token = jwt.sign({_id: user._id},process.env.JWT_SECRET,{ expiresIn: '7d' })
        console.log(token);
        const {_id, name,email,role} = user

        return res.json({

            token,

            user: {_id, name,email,role}

        })

    })

}




// secure sign in 

exports.requireSignIn = expressJwt({secret: process.env.JWT_SECRET, algorithms: ["HS256"]})


exports.authMiddleware = (req, res, next)=>{

    const authUserId = req.auth._id;

    console.log(authUserId)

    

    User.findOne({ _id: authUserId }).exec((err, user) => {

        if (err || !user) {

            return res.status(400).json({

                error: 'User not found'

            });
        }
        
        req.profile = user;


        next();

    })


}






exports.adminMiddleware = (req,res,next)=>{

    const adminUserId = req.auth._id;

    console.log(adminUserId)

    User.findOne({_id: adminUserId}).exec((err,user)=>{

        if(err || !user){

            return res.status(400).json({

                error: "Admin not found :("

            })

        }


        if(user.role !== 'admin'){

            return res.status(400).json({

                error: 'Admin access denied :('

            })

        }

        req.profile = user

        next()

    })


}