const db = require('./../dbConfig').initDb();
const { dbConfig } = require('../../config');
const logger = require('../util/Logger');
const moment = require('moment');
const _ = require('lodash');

const create = async (req, res) => {
    const keyValues = req.body;
    if(_.isEmpty(keyValues)) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    try {
        for( let key in keyValues) {
            const count = await db(dbConfig.tables.objKey).where('objectKey', key).update({
                objectKey: key,
                objectValue: keyValues[key]
            });
            if (count) {
                res.status(200).json({updated: count})
            } else {
               await db(dbConfig.tables.objKey)
                    .insert({
                        objectKey: key,
                        objectValue: keyValues[key],
                    })
                    .then(() => {
                        logger.info('data inserted');
                    })
                    .catch((err) => {
                        logger.error(err.message, keyValues);
                    });
                res.status(200).json({message: "Data Inserted"});
            }
        }
    } catch (err) {
        res.status(500).json({message: "Error updating new keyValue", error: err})
    }
};

const returnOne = async (req, res) => {
    const { myKey } = req.params;
    const { reg_date } = req.query;
    if(_.isEmpty(myKey)) {
        res.status(400).send({
            message: "key should not be empty"
        });
        return;
    }
    try {
        let objectValues;
        if(!_.isEmpty(reg_date)){
            const timeStamp = moment.unix(reg_date).format("YYYY-MM-DD hh:mm:ss");
            objectValues = await db(dbConfig.tables.objKey).where({'objectKey': myKey, reg_date: timeStamp});
        } else {
            objectValues = await db(dbConfig.tables.objKey).where({'objectKey': myKey});
        }
        if (objectValues) {
            res.status(200).json({returned: objectValues})
        }
    } catch (err) {
        res.status(500).json({message: "Error getting keyValue", error: err})
    }
};

module.exports = {
    create,
    returnOne
}
