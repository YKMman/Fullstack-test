const Pool = require('pg').Pool

const pool = new Pool({
    user: '',
    host: '',
    password: '',
    database: '',
    port: ''
})

module.exports = pool