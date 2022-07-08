const ModuleContent = require('../models/content')


const slugify = require('slugify')

const { v4: uuidv4 } = require('uuid');

const AWS = require('aws-sdk')

const { Buffer } = require('node:buffer');



//AWS s3

const s3 = new AWS.S3({

    
    accessKeyId: process.env.AMAZON_ACCESS_KEY_ID,
    secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION 

})

// create content


exports.createModule = (req,res)=>{


    const {title,content,image} = req.body

    // image data

    const base64Data = new Buffer.from(image.replace(/^data:image\/\w+;base64,/,''),'base64');

    console.log('FROM CREATE module function: ', base64Data);

    // console.table(name,base64Data,content)

    const type = image.split(';')[0].split('/')[1]


    const slug = slugify(title)


    let module = new ModuleContent({title, content, slug})


    //upload to s3

    const params = {

        Bucket: 'gitnode-bucket',
        Key: `category/${uuidv4()}.${type}`,
        Body: base64Data,
        ACL:  "public-read",
        ContentEnCoding: 'base64',
        ContentType: `image/${type}`

    }


    console.log('LOG FROM createmodulefunction: ',params, title);


    s3.upload(params, (err,data)=>{

        if(err){

            console.log(err);

            return res.status(400).json({

                error: 'Upload to s3 failed'

            })
        }

        console.log('AWS upload res data', data);

        module.image.url = data.Location

        module.image.key = data.Key
        
        module.postedBy = req.auth._id

        console.log(module.image.url, " " , module.image.key, " ", module.postedBy);


        


        //save to database

        module.save((err,success)=>{

          if(err){

                console.log(err);

                return res.status(400).json({

                    error: 'Save to Database failed :('

                })
            }

            return res.json(success)

        })

    })

}




exports.moduleList = (req,res)=>{

    ModuleContent.find({}).exec((err,data)=>{

        if(err){

            console.log(err);

            return res.status(400).json({

                error: 'Module could not load :('

            })

        }
        
        console.log("Module data from server: ",data);

        console.log('from read module controllers: ', data);

        res.json(data);
    })
    
}


exports.readModule = (req,res)=>{

    const {slug} = req.params

    ModuleContent.findOne({slug})

    .populate('postedBy', '_id name userName')
    .exec((err,module)=>{

        if(err){
            return res.status(400).json({

                error: 'Could not load Module :('

            })
        }

       res.json({module}) 

    })
    
}



exports.updateModule = (req,res)=>{


    
}




exports.remove = (req,res)=>{


    
}