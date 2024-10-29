// client/src/services/authService.js

const API_URL = 'http://localhost:5000'; 

export const login = async (username, password) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
};

export const logout = () => {
    localStorage.removeItem('token');
};

export const isLoggedIn = () => {
    return Boolean(localStorage.getItem('token'));
};
