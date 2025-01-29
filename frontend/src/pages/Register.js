//NOTE: IMPORTS -----------------------------------------------------------------------------------
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Register = () => {
    //NOTE: CREATING USESTATES + USENAVIGATE
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState('');

    //NOTE: HANDLING SIGN UP ----------------------------------------------------------------------
    const handleSignup = async (e) => {
        e.preventDefault();
        console.log('Pressed')
        //TODO: IMPLEMENT SIGN UP ONCE BACKEND IS I FINISHED
        try {
            //REVIEW: THE GET METHOD ALONG WITH THE PROVIDED "useremail" DOESNT SEEM TO FUNTION
            const response = await axios.post("http://localhost:8000/api/user/email/verify", {
                useremail: email
            })
            //DEBUG: REMOVE BEFORE DEPLOYMENT
            //console.log('Response:', response);

            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setErrors([]);
            navigate('/verify');

        } catch (err) {
            //DEBUG: REMOVE BEFORE DEPLOYMENT
            // console.log('Error details:', {
            //     message: err.message,
            //     response: err.response,
            //     status: err?.response?.status
            // });
            setErrors('ERROR ')
        }
    }

    //NOTE: RETURNING FORM WITH APPROPRIATE FUNCTIONS ---------------------------------------------
    return (
        <div className='auth-box'>
            <div className='auth-container'>
                <h1 className='title'>Sign up</h1>
                <form onSubmit={handleSignup}>
                    <div className='input-container'>
                        <label>
                            Email:
                        </label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email Address"
                        />
                    </div>
                    
                    <div className='input-container'>
                        <label>
                            Enter password
                        </label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                        />
                    </div>

                    <div className='input-container'>
                        <label>
                            Re-enter password
                        </label>
                        <input 
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                        />
                        {errors.length !== 0 && 
                        <div className='error-container'>
                            <span className='error-msg'>{errors}</span>
                        </div>
                        }
                    </div>

                    <button type="submit" 
                            className="btn auth-btn">
                        Sign up
                    </button>
                </form>
                <div className='switch-auth'>
                    <p>Already have an account?</p>
                    <Link to='/login'>Log in here!</Link>
                </div>
            </div>
        </div>
    )
}

export default Register