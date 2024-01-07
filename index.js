const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const authenticateToken = require('./middlewares/authentication'); // Include authentication middleware

const apiRoutes = require('./routes/api');
const authRoutes = require('./routes/auth'); // Include authentication routes

// Middleware
app.use(express.json());

// API Routes (secured with authentication)
app.use('/api', authenticateToken, apiRoutes);

// Authentication Routes
app.use('/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
