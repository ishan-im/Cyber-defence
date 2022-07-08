const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema



const moduleContentSchema = new mongoose.Schema({


    title:{

        type: String,
        trim: true,
        required: true,
        max: 64

    },

    slug:{

        type: String,
        lowercase: true,
        unique: true,
        trim: true,
        required: true,
        max: 64,
        index: true

    },

    image: {

        url: String,
        key: String,
        
    },

    content: {

        type: {},
        min: 200,

    },
    
    postedBy: {

        type: ObjectId,
        ref: 'User'

    }
},{timestamps: true})


module.exports = mongoose.model('ModuleContent', moduleContentSchema)