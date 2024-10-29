// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import { isLoggedIn } from './services/authService';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={isLoggedIn() ? <Navigate to="/home" /> : <Login />} />
                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to={isLoggedIn() ? "/home" : "/login"} />} />
            </Routes>
        </Router>
    );
}

export default App;
