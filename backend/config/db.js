const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'test',
    password: 'test',
    host: 'localhost',
    port: 5432,
    database: 'personalityusers'
});

module.exports = pool;