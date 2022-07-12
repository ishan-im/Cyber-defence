const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();





const app = express();

//db

mongoose.connect(process.env.DATABASE_CLOUD)
        .then(()=>console.log('Databse connected'))
        .catch((err)=>console.log(err))



//routes        

const authRoutes = require('./routes/auth')

const userRoutes = require('./routes/user')

const blogRoutes = require('./routes/blog')

const contentRoutes = require('./routes/content')
                  

// app  middleware

app.use(morgan('dev'))


app.use(bodyParser.json({limit: '50mb', type:'application/json'}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// resource sharing validation

app.use(cors({

        origin: process.env.CLIENT_URL
        
        }));


//routes


app.use('/api', authRoutes)

app.use('/api', blogRoutes)

app.use('/api', userRoutes)

app.use('/api', contentRoutes)



//port

const port = process.env.PORT || 8080

app.listen(port,(req,res,next)=>{
    console.log(`API is running on port ${port}`);
})

