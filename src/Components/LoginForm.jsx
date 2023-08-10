import React, { useState } from 'react';
import InputField from './InputField';
import './LoginForm.css'; // Add the appropriate CSS file for styling
import {  useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "hrushikesh.1804@gmail.com" && password=== "123") {
            
            navigate('/Home');
        }
        // Handle login logic here
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png" alt="Netflix Logo" className="logo" />

                <form onSubmit={handleSubmit}>
                    <InputField label="Email" type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
                    <InputField label="Password" type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
                    <button type="submit" className="login-button">Sign In</button>
                </form>

                <div className="help-links">
                    <span>Need help?</span>
                    <span>New to Netflix? Sign up now.</span>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;