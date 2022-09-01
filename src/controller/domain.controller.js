const db = require("../models")
const Domains  = db.domains;
const { successFormat, errorMsgFormat } = require('../utils/messageFormat.js')

exports.getDomain = async(req,res) =>{
    try {
        const { domain_id } = req.params;
        const domain = await Domains.findOne({
            where :{
                id : domain_id
            },
            attributes:['id', 'domainName','domainNameHash']
        })
        if (!domain){
            return res.send(`No TLD with ${domain_id} exists`)
        }
        else{
            return res.send(successFormat(
                {
                    id : domain.id,
                    domainName : domain.tldName, 
                    domainNameHash : domain.domainNameHash, 
                    tld_id : domain.tld_id,
                    user_id : domain.user_id 
                }),
                 "Domain"
            )}
    } catch (error) {
        return res.status(500).send(errorMsgFormat(error.message, 'Domain', 500));

    }
}

exports.createDomain = async(req,res) =>{
    try { 
        const {
            name,
            name_Hash,
            tld_id,
        } = req.body;
        const user_id = req.user.id
        const _isExist = await Domains.findOne({
            where : {
                tldName : name,
                tldNameHash : name_Hash
            }
        })
        if(!_isExist){
        await Domains.create({
            domainName : name,
            domainNameHash : name_Hash,
            tld_id : tld_id,
            user_id : user_id
        })
        return res.send("TLD created successfully!!");
    }else {
        return res.send(`TLD with ${name} and ${name_Hash} already exists!!`)
    }
    } catch (error) {
        return res.status(500).send(errorMsgFormat(error.message, 'TLD', 500))
    }
}