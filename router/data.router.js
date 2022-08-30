const router = require('express').Router();
const dataController = require('../controller/data.controller')


// api to get the data from Data table using the domain_id of the Domain table

router.get('/:basedomain_id', (req,res) =>{
    return dataController.getData(req,res)
})

// api to create the new domain name in the Domain table

router.post('/create',(req,res) =>{
    return dataController.createDomain(req,res)
})

// api to set the data(subdomain data) in the Data table

router.post('/setdata', (req,res)=>{
    return dataController.setData(req,res)
})

// api to get the domainId in the Domain table

router.get('/id',(req,res) =>{
    return dataController.getDomainId(req,res)
})