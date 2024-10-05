const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./config/db');

const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Create a user
app.post('/users', async (req, res) => {
    try {
        // const { name, email } = req.body;
        // const newUser = await pool.query('INSERT INTO users (name, email) VALUES($1, $2) RETURNING *', [name, email]);
        // res.json(newUser.rows[0]);
        console.log(req.body);
    } catch (error) {
        console.error(error.message);
    }
});

// Get all users

// Get a user

// Update a user

// Delete a user

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});