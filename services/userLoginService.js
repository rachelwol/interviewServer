const db = require('../db');

async function Login(userDetails){
    const query = `select * 
    from users
    where username = '${userDetails.username}'
    and password = '${userDetails.password}'
    `;
    const data = await db.query(query);
    return data;
}

module.exports = {
    Login
}