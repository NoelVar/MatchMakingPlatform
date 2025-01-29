//NOTE: IMPORTS -----------------------------------------------------------------------------------
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios';
import AuthService from '../services/authService';

const Logout = () => {

    //NOTE: CREATING USESTATES + USENAVIGATE
    const navigate = useNavigate();

    //NOTE: HANDLING LOGOUT
    const handleLogout = async () => {
        try {
            //NOTE: DELETES TOKEN FROM SESSION STORAGE
            await axios.delete("http://localhost:8000/api/user/logout");
            AuthService.clearAuth();
            navigate('/login');
            
        } catch (err) {
            //DEBUG: REMOVE BEFORE DEPLOYMENT
            //console.error('Logout failed:', err);
            //NOTE: FORCE LOGOUT EVEN IF API CALL FAILS
            AuthService.clearAuth();
            navigate('/login');
        }
    }
    return (
        <div className="logout-container">
            <button onClick={handleLogout} className="btn logout-btn">Logout</button>
        </div>
    )
}

export default Logout