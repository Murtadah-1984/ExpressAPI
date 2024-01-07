const db = require('../config/database');

const productModel = {
    getAllProducts: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM products', (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    },

    getProductById: (productId) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM products WHERE id = ?', [productId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0]);
                }
            });
        });
    },

    createProduct: (productData) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO products SET ?', productData, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    productData.id = result.insertId;
                    resolve(productData);
                }
            });
        });
    },

    updateProduct: (productId, productData) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE products SET ? WHERE id = ?', [productData, productId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },

    deleteProduct: (productId) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM products WHERE id = ?', [productId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
};

module.exports = productModel;
