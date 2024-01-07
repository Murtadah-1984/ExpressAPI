const db = require('../config/database');

const userModel = {
    createUser: async ({ username, password }) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    const newUser = { id: result.insertId, username };
                    resolve(newUser);
                }
            });
        });
    },

    getUserById: async (userId) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    const user = results[0];
                    resolve(user);
                }
            });
        });
    },

    // Add more user-related model functions as needed (update, delete, list, etc.).
};

module.exports = userModel;
