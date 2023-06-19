import React, {useContext, useState} from 'react';
import './login.css'
import {AuthContext} from "@/components/context/authContext";

const LoginPage = () => {
    const { login } = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        let button = document.getElementById('login-button');
        button.classList.add('loading');
        button.innerText = ''

        event.preventDefault();

        await login(username, password);

        button.classList.remove('loading');
        button.innerText = 'Entrar'
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Username:</label>
                        <input
                            type="username"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="login-button" id={'login-button'}>Entrar</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
