const { body, param, validationResult } = require('express-validator');
const { Todo } = require('../../db/models');
module.exports = {

    validateCreate: [
        body('name').notEmpty().withMessage('name is required'),
        body('TodoId').notEmpty().withMessage('TodoId is required'),
        (req, res, next) =>  {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(422).json({
                    message : "error",
                    error : errors.array(),
                })
            }

            next()
        },
    ],

    validateOne : [
        param('id').notEmpty().withMessage('Param ID is Required')
        .bail()
        .isNumeric()
        .withMessage('id must be an integer')
        .bail()
        .custom(async(value, {req}) => {
            const checking = await Todo.findOne({
                where: {id : value}
            })

            if(checking === null){
                return Promise.reject();
            }
        })
        .withMessage('param id Not Found'),
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
    ],

    validateCreateUpdate : [
        param('id').notEmpty().withMessage('Param ID is Required')
        .bail()
        .isNumeric()
        .withMessage('id must be an integer')
        .bail()
        .custom(async(value, {req}) => {
            const checking = await Todo.findOne({
                where: {id : value}
            })

            if(checking === null){
                return Promise.reject();
            }
        })
        .withMessage('param id Not Found'),
        body('name').notEmpty().withMessage('name is required'),
        body('TodoId').notEmpty().withMessage('TodoId is required'),
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
    ],

    validateMove : [
        param('id').notEmpty().withMessage('Param ID is Required')
        .bail()
        .isNumeric()
        .withMessage('id must be an integer')
        .bail()
        .custom(async(value, {req}) => {
            const checking = await Todo.findOne({
                where: {id : value}
            })

            if(checking === null){
                return Promise.reject();
            }
        })
        .withMessage('Item id Not Found'),
        body('targetTodoId').notEmpty().withMessage('TargetTodoId is required'),
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
    ],



}