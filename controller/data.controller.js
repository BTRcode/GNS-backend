
const Domain = require('../models/Domain.js')
const Data = require('../models/Data.js')


exports.createDomain = async (req,res) => {
    try {
        const _isExist = await Domain.findOne({
            where: {
                Domain_name: req.body.nameHash,
            }
    })
    if(!_isExist){
        await Domain.create({
            Domain_name : req.body.nameHash
        })
        return res.send("Domain name added successfully")
    }else{
        res.send("Domain name already exists")
    }
    }catch (error) {
        console.log("Error in creating the Domain")
    }
}

exports.getDomainId = async(req,res) =>{
    try {
        const id = Domain.findOne({
            where : {
                Domain_name : req.body.nameHash
            }
        })
        return res.send(id)
    } catch (error) {
        console.log('Error in getting domainId',error)
    }
}

exports.getData = async (req, res) => {
    const { id } = req.params;

    const data = await Data.findAll({
        where: {
            id : id,
        },
    });

    if (!data) {
        return res.status(400).send({
            message: `No user found with the id ${id}`,
        });
    }

    return res.send(data);
};

exports.setData = async (req, res) => {
    
    try {
        await Data.create({
            subdomain: req.body.subdomain,
            basedomain_id: req.body.basedomain_id
            });
        console.log("Data created successfully")
    
    } catch (error) {
        console.log('error in set Data', error.message, error.stack);
        return res.status(500).send(error.message, 'Data', 500)
    }

}

