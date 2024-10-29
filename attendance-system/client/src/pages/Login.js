import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../components/apiService';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(username, password);
            localStorage.setItem('token', data.token);
            navigate('/home');
        } catch (error) {
            setError('Invalid credentials');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.heading}>Login</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        style={styles.input}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>Login</button>
                    {error && <p style={styles.errorText}>{error}</p>}
                </form>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f7fa',
    },
    formContainer: {
        width: '350px',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    heading: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ddd',
        fontSize: '16px',
        outline: 'none',
    },
    button: {
        padding: '10px',
        marginTop: '15px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#45a049',
    },
    errorText: {
        color: 'red',
        marginTop: '10px',
        fontSize: '14px',
    },
};

export default Login;
