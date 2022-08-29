const router = require('express').Router();
const dataController = require('../controller/data.controller')

router.get('/:basedomain_id', (req,res) =>{
    return dataController.getData(req,res)
})

router.post('/data', (req,res)=>{
    return dataController.setData(req,res)
})

router.get('/id',(req,res) =>{
    return dataController.getDomainId(req,res)
})