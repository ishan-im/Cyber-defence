const BlogContent = require('../models/blog')


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

// create blog


exports.createBlog = (req,res)=>{


    const {title,content,image} = req.body

    // image data

    const base64Data = new Buffer.from(image.replace(/^data:image\/\w+;base64,/,''),'base64');

    console.log('FROM CREATE Blog function: ', base64Data);

    // console.table(name,base64Data,content)

    const type = image.split(';')[0].split('/')[1]


    const slug = slugify(title)


    let blog = new BlogContent({title, content, slug})


    //upload to s3

    const params = {

        Bucket: 'gitnode-bucket',
        Key: `category/${uuidv4()}.${type}`,
        Body: base64Data,
        ACL:  "public-read",
        ContentEnCoding: 'base64',
        ContentType: `image/${type}`

    }


    console.log('LOG FROM create blog function: ',params, title);


    s3.upload(params, (err,data)=>{

        if(err){

            console.log(err);

            return res.status(400).json({

                error: 'Upload to s3 failed'

            })
        }

        console.log('AWS upload res data', data);

        blog.image.url = data.Location

        blog.image.key = data.Key
        
        blog.postedBy = req.auth._id

        console.log(blog.image.url, " " , blog.image.key, " ",blog.postedBy);


        


        //save to database

        blog.save((err,success)=>{

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




exports.blogList = (req,res)=>{

    BlogContent.find({}).exec((err,data)=>{

        if(err){

            console.log(err);

            return res.status(400).json({

                error: 'Blog could not load :('

            })

        }
        
        console.log("Blog data from server: ",data);

        res.json(data);
    })
    
}


exports.readBlog = (req,res)=>{


    
}



exports.updateBlog = (req,res)=>{


    
}




exports.remove = (req,res)=>{


    
}