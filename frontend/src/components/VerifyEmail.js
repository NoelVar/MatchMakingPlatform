//NOTE: IMPORTS -----------------------------------------------------------------------------------
import { use, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios';

const VerifyEmail = () => {

    //NOTE: CREATING USESTATES + USENAVIGATE
    const navigate = useNavigate();
    const [code, setCode] = useState('');
    const [useremail, setUserEmail] = useState('');
    const [errors, setErrors] = useState([]);

    //NOTE: HANDLING VERIFICATION -----------------------------------------------------------------
    const handleVerification = async (e) => {
        e.preventDefault()
        
        //TODO: CREATE VERIFICATION FUNCTIONALITY
        try {
            //REVIEW: THE GET METHOD ALONG WITH THE PROVIDED "useremail" DOESNT SEEM TO FUNTION
            const response = await axios.post("http://localhost:8000/api/user/profile", {
                useremail: useremail,
                emailVeriCode: code
            })
            //DEBUG: REMOVE BEFORE DEPLOYMENT
            //console.log(response)

            setUserEmail('');
            setCode('')
            setErrors([]);
            navigate('/profile')
            

        } catch (err) {
            //DEBUG: REMOVE BEFORE DEPLOYMENT
            console.log('Error details:', {
                message: err.message,
                response: err.response,
                status: err?.response?.status
            });

            setErrors('ERROR ' + err.response.status)
        }
    }

    return (
        <div className='auth-box'>
            <div className='auth-container'>
                <h1 className="title">Verification code has been sent to your email address</h1>
                <form onSubmit={handleVerification}>
                <div className='input-container'>
                        <label>
                            Email
                        </label>
                        <input 
                            type="email"
                            onChange={(e) => setUserEmail(e.target.value)}
                            placeholder="Enter the email address ..."
                        />
                        <label>
                            Verification code
                        </label>
                        <input 
                            type="text"
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="Enter the verification code ..."
                        />
                        {errors.length !== 0 && 
                            <div className='error-container'>
                                <span className='error-msg'>{errors}</span>
                            </div>
                        }
                    </div>
                    <button type="submit"
                            className="btn auth-btn">
                        Verify
                    </button>
                </form>
            </div>
        </div>
    )
}

export default VerifyEmail