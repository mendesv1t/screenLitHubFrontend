import React, { createContext, useState } from 'react';
import axios from 'axios';

// Crie um contexto para o estado logado
export const AuthContext = createContext();

// Crie um componente de provedor para envolver os componentes que precisam acessar o estado logado
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

    let tokenStorage;

    if (typeof window !== 'undefined') {
        // Perform localStorage action
        tokenStorage = localStorage.getItem('token');
    }

    if (tokenStorage) {
        setToken(tokenStorage)
        setIsLoggedIn(true)
    }

    // Função para fazer login
    const login = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:3001/auth/login', {
                login: username,
                password: password,
            });
            // Processar a resposta da API aqui, por exemplo, salvar token de autenticação
            if (response.status === 201) {
                let tokenObject = response.data;
                localStorage.setItem('tokenStorage', tokenObject.access_token)
                setToken(tokenObject.access_token);
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error('Erro no login:', error);
        }
    };

    // Função para fazer logout
    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
