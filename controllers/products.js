const productService = require('../models/products');

// Controller functions for product-related operations
const productController = {
    getAllProducts: (req, res) => {
        productService.getAllProducts()
            .then((products) => res.json(products))
            .catch((error) => res.status(500).json({ error: 'Internal Server Error' }));
    },

    getProductById: (req, res) => {
        const productId = req.params.id;
        productService.getProductById(productId)
            .then((product) => {
                if (!product) {
                    res.status(404).json({ error: 'Product not found' });
                } else {
                    res.json(product);
                }
            })
            .catch((error) => res.status(500).json({ error: 'Internal Server Error' }));
    },

    createProduct: (req, res) => {
        const { name, description, price } = req.body;
        productService.createProduct({ name, description, price })
            .then((newProduct) => res.status(201).json(newProduct))
            .catch((error) => res.status(500).json({ error: 'Internal Server Error' }));
    },

    updateProduct: (req, res) => {
        const productId = req.params.id;
        const { name, description, price } = req.body;
        productService.updateProduct(productId, { name, description, price })
            .then((result) => {
                if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'Product not found' });
                } else {
                    res.json({ message: 'Product updated successfully' });
                }
            })
            .catch((error) => res.status(500).json({ error: 'Internal Server Error' }));
    },

    deleteProduct: (req, res) => {
        const productId = req.params.id;
        productService.deleteProduct(productId)
            .then((result) => {
                if (result.affectedRows === 0) {
                    res.status(404).json({ error: 'Product not found' });
                } else {
                    res.json({ message: 'Product deleted successfully' });
                }
            })
            .catch((error) => res.status(500).json({ error: 'Internal Server Error' }));
    },
};

module.exports = productController;
