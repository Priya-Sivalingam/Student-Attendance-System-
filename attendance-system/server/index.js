// server/index.js
require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY; // Use the environment variable

app.use(express.json());

// Sample user data for simplicity (username and password stored in a file)
const usersFilePath = path.join(__dirname, 'users.json');

// Login Route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // Read users from file
    const usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    const user = usersData.find(u => u.username === username && u.password === password);

    if (user) {
        // Generate JWT token
        const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
