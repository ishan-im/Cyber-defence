const {check} = require('express-validator'); 

exports.createBlogValidator =  [

        check('title')
            .not()
            .isEmpty()
            .withMessage('Title is required'),

        check('image')
            .isEmpty()
            .withMessage('Image is required'),

        check('content')
            .isLength({ min: 200 })
            .withMessage('Conent is required and should be min 200 characters long')
    ];



    exports.updateBlogValidator =  [

        check('name')
            .not()
            .isEmpty()
            .withMessage('Name is required'),

        check('image')
            .isEmpty()
            .withMessage('Image is required'),

        check('content')
            .isLength({ min: 100})
            .withMessage('Conent is required')
    ];
