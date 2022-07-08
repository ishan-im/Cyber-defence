const mongoose = require('mongoose');

const crypto = require('crypto')

const userSchema =  new mongoose.Schema({

    userName: {
            
        type:String,
        trim:true,
        required:true,
        max:12,
        unique:true,
        index:true,
        lowercase:true

    },

    name:{
        
        type:String,
        trim:true,
        required:true,
        max:32,
       
    },

    email:{

        type:String,
        trim:true,
        required:true,
        unique:true,
        lowercase:true

    },

    hashed_password:{

        type:String,
        required:true

    },

    salt:String,

    role:{

        type:String,
        default:'subscriber'

    },

    resetPasswordLink:{

        data:String,
        default:''

    }


},{timestamps:true});


// virtual field

userSchema.virtual('password')
          .set(function(password){

            // create temp variable called _paswword

             this._password = password

             // generate salt
            
             this.salt = this.makeSalt();

             //encrypt password

             this.hashed_password = this.encryptPassword(password)

          })

          .get(function(){
             
              return this._password
          })



//methods > authinticate , encrypt password, makeSalt

    userSchema.methods = {

        encryptPassword: function(password){

                        if(!password){
                            return ''
                        }

                        try{
                            return crypto.createHmac('sha1', this.salt)
                                          .update(password)
                                          .digest('hex');
                        }

                        catch(err){
                            return ''
                        }

                               },

        makeSalt:       function(){

                                   return Math.round(new Date().valueOf() * Math.random()).toLocaleString();

                                   },
                                  
        authenticate:   function(plainText ){

                                    return this.encryptPassword(plainText) === this.hashed_password;

                                  }                            
        
    }

// expoet user model


module.exports = mongoose.model('User', userSchema);