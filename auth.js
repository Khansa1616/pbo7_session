const mysql = require('mysql');
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'penjualanhasillaut'
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Database connected...');
    
        
});
module.exports = db;