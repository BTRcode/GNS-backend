const router = require('express').Router();
const domainController = require('../controller/tld.controller');
const domainValidation = require('../validation/tld.validation')
const { validationFormat } = require('../utils/messageFormat')
const auth = require('../utils/authenticate.js')

router.get('/:tldId',(req,res)=>{
    return domainController.getDomain(req,res);
})

router.post('/create',auth,(req,res)=>{
    try {
        let { error } = domainValidation();
        if (error) {
            return res.status(400).send(validationFormat(error, 'TLD', 400))
        }
        return domainController.createDomain(req,res)
    } catch (error) {
        return res.send(error.message)
    }
    
})