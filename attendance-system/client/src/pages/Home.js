import React from 'react';
import Header from '../components/header';

function Home() {
    // Retrieve the username from local storage
    const username = localStorage.getItem('username');

    return (
        <div>
            <Header />
            <div style={{ padding: '20px' }}>
                <h1>Welcome to the Home Page</h1>
                {username && <h2>Hello, {username}!</h2>} {/* Display username if available */}
            </div>
        </div>
    );
}

export default Home;
