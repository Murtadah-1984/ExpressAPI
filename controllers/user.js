const userModel = require('../models/user');

const userController = {
    createUser: async (req, res) => {
        const { username, password } = req.body;

        try {
            const newUser = await userModel.createUser({ username, password });
            res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    getUserById: async (req, res) => {
        const userId = req.params.id;

        try {
            const user = await userModel.getUserById(userId);
            if (!user) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.json(user);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    // Add more user-related controller functions as needed (update, delete, list, etc.).
};

module.exports = userController;
