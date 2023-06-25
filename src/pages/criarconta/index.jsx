import React, {useContext, useState} from 'react';
import './criarConta.css'
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useRouter} from "next/router";

const AddAccount = () => {
    const router = useRouter();

    let apiurl = process.env.NEXT_PUBLIC_API_URL;
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [wrongPassword, setWrongPassword] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePasswordConfirmChange = (event) => {
        setPasswordConfirm(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = async (event) => {

        if (password !== passwordConfirm) {
            setWrongPassword(true);
        } else {
            let button = document.getElementById('login-button');
            button.classList.add('loading');
            button.innerText = ''

            event.preventDefault();

            await axios.post(apiurl + 'auth/createUser', {
                name: name,
                login: username,
                password: password
            } ).then(() => {
                router.push('/login')
            });

            button.classList.remove('loading');
            button.innerText = 'Criar Conta'
        }

    };

    return (
        <div className="login-container">
            <div className="login-content" style={{display: 'grid'}}>
                <h2 className="login-title" style={{marginBottom: '2em'}}>Cadastro de usuário</h2>
                <form className="login-form">
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Nome:</label>
                            <input
                                type="name"
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                                className="form-input"
                            />
                        </div>
                        <label htmlFor="email" className="form-label">Usuário:</label>
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
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Digite novamente a senha:</label>
                        <input
                            style={{color: `${wrongPassword ? 'red' : ''}`}}
                            type="password"
                            id="password"
                            value={passwordConfirm}
                            onChange={handlePasswordConfirmChange}
                            className="form-input"
                        />
                    </div>
                    {wrongPassword ? <span style={{color: 'red', marginBottom: '1.5em'}}>Senhas não conferem</span> : <></>}
                </form>
                <button style={{justifySelf: 'center'}} onClick={(e) => {handleSubmit(e)} } className="login-button" id={'login-button'}>Criar</button>
            </div>
        </div>
    );
};

export default AddAccount;
