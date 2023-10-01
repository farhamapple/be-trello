const { body, validationResult } = require('express-validator');
const { User } = require('../../db/models');
module.exports = {

    validateLogin : [
        body('username').notEmpty().withMessage('username is required')
        .bail()
        .custom(async(value, {req}) => {
            const checking = await User.findOne({
                where: {username : value}
            })

            if(checking === null){
                return Promise.reject();
            }
        })
        .withMessage('Username Not Found'),
        body('password').notEmpty().withMessage('password is required'),
        
        (req, res, next) =>  {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(422).json({
                    message : "error",
                    error : errors.array(),
                })
            }

            next()
        }
    ]
}