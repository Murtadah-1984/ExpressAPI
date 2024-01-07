const mysql = require('mysql2');
require('dotenv').config();

// Create a MySQL pool connection
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'mydb',
    connectionLimit: 10, // Adjust as needed based on your database setup
});

// Export the pool for use in models or other parts of your application
module.exports = pool.promise();
