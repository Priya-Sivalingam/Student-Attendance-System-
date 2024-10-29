const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const fs = require('fs');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Read users.json file and handle errors
let users = [];
try {
    users = JSON.parse(fs.readFileSync('users.json', 'utf8'));
} catch (error) {
    console.error('Error reading users.json:', error);
}

// Login route
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Validate request body
    if (!username || !password) {
        return res.status(400).send('Username and password are required.');
    }

    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Generate a JWT token
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }

    res.status(401).send('Invalid credentials');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
