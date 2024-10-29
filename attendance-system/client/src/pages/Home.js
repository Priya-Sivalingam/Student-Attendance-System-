// client/src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            <h2>Welcome to the Home Page!</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;
