const db = require('../db');

async function UserDetails(token){
    const query = `select * 
    from Users
    `;
    const data = await db.query(query);
    return data;
}

module.exports = {
    UserDetails
}