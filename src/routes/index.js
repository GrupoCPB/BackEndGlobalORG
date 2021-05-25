const express = require('express');
const router = express.Router();
router.get('/api', function (req, res, next) {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo(a) a APi do Global ORG',
        version: '1.0.0',
        });
});
module.exports = router;


