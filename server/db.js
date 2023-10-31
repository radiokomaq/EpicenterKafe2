const Pool = require('pg').Pool
const dbConfig = JSON.parse(process.env.DATABASE_CONFIG);
const pool = new Pool({
    user: dbConfig.user,
    password: dbConfig.password,
    host: dbConfig.host,
    port: dbConfig.port,
    database: dbConfig.database
});

module.exports=pool
 