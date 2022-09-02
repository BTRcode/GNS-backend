const initModels = require('../models/init-models');
const _ = require('lodash');
const { sequelize } = require('../models');
const models = initModels(sequelize)
const { successFormat, errorMsgFormat } = require('../utils/messageFormat.js')

exports.getAllSubDomains = async(req,res) =>{
    try {
        let query = req.query;
        let skip = Number(query.skip) || 0, limit = Number(query.limit) || 10;
        logger.info(query)
        let totalCount = await models.subdomains.count();
        logger.info('total count', totalCount)
        let nftData = await models.subdomains.findAll({
            include: "",
            offset: skip,
            limit
        });
        let isLast = skip + limit >= totalCount;
        return res.status(200).send(successFormat({nfts: nftData, isLast, totalCount }, 'NFT'))
    } catch (error) {
        logger.error('error in get nft', error.message, error.stack);
        return res.status(500).send(errorMsgFormat(error.message, 'NFT', 500))
    }
}

exports.createSubDomain = async(req,res) =>{
    try { 
        const {
            name,
            name_Hash
        } = req.body;
        const user_id = req.user.id
        const domain = await models.domains.finOne({
            where : {
                user_id : user_id
            }
        })
        await models.subdomains.create({
            subdomainName : name,
            subdomainNameHash : name_Hash,
            domain_id : domain.id
        })
        return res.send(`subdomain created with ${domain.domainName} successfully!!`);
    } catch (error) {
        return res.status(500).send(errorMsgFormat(error.message, 'TLD', 500))
    }
}

exports.updatedomain = async(req,res) => {
    try {
        
    } catch (error) {
        
    }
}

exports.deleteDomain = async(req,res) => {
    try {
        
    } catch (error) {
        
    }
}