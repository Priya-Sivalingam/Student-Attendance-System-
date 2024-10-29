// apiService.js
export const loginUser = async (username, password) => {
    const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
        throw new Error('Invalid credentials'); // Handle any error returned from the server
    }

    const data = await response.json();
    return data; // Returns the token received from the server
};
