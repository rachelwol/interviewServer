const express = require('express');
const router = express.Router();
const userService = require('../services/userLoginService');

router.post('/login', async (req, res) => {
    // res.json({ message: 'Root page' });
    // console.log(req.body);
    let result = await userService.Login(req.body);
    if (result.length == 0) {
        res.status(401).send('שם המשתמש או הסיסמא אינם נכונים');
    } else {
        res.json(result[0]);
        console.log(res.result);
    }
})

module.exports = router;