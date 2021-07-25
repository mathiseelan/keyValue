const express = require('express');
const keyUpdateController = require("../controllers/keyUpdate");

module.exports = app => {

    let router = express.Router();

    router.post("/object", keyUpdateController.create);

    router.get("/object/:myKey", keyUpdateController.returnOne);

    app.use('/', router);
};
