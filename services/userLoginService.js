const db = require('../db');

async function Login(userDetails){
    // console.log(userDetails.userId);
    const query = `select * 
    from usersDB 
    where userID = '${userDetails.userID}'
    and username = '${userDetails.username}'
    `;
    const data = await db.query(query);
    return data;
}

module.exports = {
    Login
}