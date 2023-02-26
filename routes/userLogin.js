const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userService = require('../services/userLoginService');

router.post('/login', async (req, res) => {
    let result = await userService.Login(req.body);
    if (result.length == 0) {
        res.status(401).send('שם המשתמש או הסיסמא אינם נכונים');
    } else {
        const RSA_PRIVATE_KEY = 'questionkey';

        var tokenData = jwt.sign({ id: result[0].userID }, RSA_PRIVATE_KEY);
        res.status(200).send({ token: tokenData, role: result[0].role})
    }
})

module.exports = router;