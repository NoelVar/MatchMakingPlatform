//NOTE: IMPORTS -----------------------------------------------------------------------------------
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios';
import AuthService from '../services/authService';

const Login = () => {

    //NOTE: CREATING USESTATES + USENAVIGATE
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [token, setToken] = useState(null);


    //NOTE: HANDLING LOGIN ------------------------------------------------------------------------
    const handleLogin = async(e) => {
        e.preventDefault()

        try {
            //NOTE: POSTS TO BACKEND URL/ENDPOINT TO ACCESS THE API FUNCTIONS
            // AND SENDS DATA: "email" & "password" 
            // AS "useremail" & "password" TO MATCH BACKEND NAMES
            //CHANGED: ADDED RESPONSE
            const response = await axios.post("http://localhost:8000/api/user/login", {
                username: username, 
                password: password
            })
            
            //DEBUG: REMOVE BEFORE DEPLOYMENT
            //console.log('Response:', response);

            //NOTE: STORES TOKEN AND USER DATA
            AuthService.setAuth(
                response.data.token, 
                { username: username }
            );

            setUsername('');
            setPassword('');
            setErrors([]);
            navigate('/');

        } catch (err) {
            //DEBUG: REMOVE BEFORE DEPLOYMENT
            // console.log('Error details:', {
            //     message: err.message,
            //     response: err.response,
            //     status: err?.response?.status
            // });
            
            if (err.response && err.response.status === 403) {
                setErrors('ERROR 403: Incorrect username or password.')
            } else if (err.response && err.response.status === 400){
                setErrors('ERROR 400: Missing username or password.')
            } else {
                setErrors('ERROR: while logging in.')
            }
            
        }
    }
    //NOTE: RETURNING FORM WITH APPROPRIATE FUNCTIONS ---------------------------------------------
    return (
        <div className='auth-box'>
            <div className='auth-container'>
                <h1 className='title'>Log in</h1>
                <form onSubmit={handleLogin}>
                    <div className='input-container'>
                        <label>
                            Username:
                        </label>
                        <input 
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className='input-container'>
                    <label>
                        Password:
                    </label>
                    <input 
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                    {errors.length !== 0 && 
                        <div className='error-container'>
                            <span className='error-msg'>{errors}</span>
                        </div>
                    }
                    </div>
                    
                    <button type="submit"
                            className="btn auth-btn">
                        Sign in
                    </button>
                </form>
                <div className='switch-auth'>
                    <p>Don't have an account yet?</p>
                    <Link to='/signup'>Sign up here!</Link>
                </div>
            </div>
        </div>
    )
}

export default Login