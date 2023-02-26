const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const userDetailsService = require('../services/userDetailsService');

router.get('/', async (req, res) => {
    const RSA_PRIVATE_KEY = 'questionkey';
    var token = req.headers['x-access-token'];

    if (!token)
        return res.status(401).send('לא נשלח טוקן');
    jwt.verify(token, RSA_PRIVATE_KEY, async function (err, decoded) {
        if (err)
            return res.status(401).send('נכשל בזיהוי הטוקן');
        let result = await userDetailsService.UserDetails();
        res.status(200).send(result[0]);
    })
})

module.exports = router;