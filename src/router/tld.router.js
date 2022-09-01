const router = require('express').Router();
const tldController = require('../controller/tld.controller');
const tldValidation = require('../validation/tld.validation')
const { validationFormat } = require('../utils/messageFormat')

router.get('/:tldId',(req,res)=>{
    return tldController.getTld(req,res);
})

router.post('/create',(req,res)=>{
    try {
        let { error } = tldValidation();
        if (error) {
            return res.status(400).send(validationFormat(error, 'TLD', 400))
        }
        return tldController.createTld(req,res)
    } catch (error) {
        return res.send(error.message)
    }
    
})