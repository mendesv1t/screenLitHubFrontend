import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

// Crie um contexto para o estado logado
export const AuthContext = createContext();

// Crie um componente de provedor para envolver os componentes que precisam acessar o estado logado
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const router = useRouter();

    let tokenStorage;

    let apiurl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(async () => {
        tokenStorage = localStorage.getItem('tokenStorage');
        if (tokenStorage) {
            setToken(tokenStorage)
            setIsLoggedIn(true)
            axios.get(apiurl + 'user', {
                headers: {Authorization: `Bearer ${tokenStorage}`}
            }).then(response => {
                setUser(response.data);
            }).catch(error => {
                if (error.response.status === 401) {
                    logout();
                }
            });
        }
    }, [])

    const updateUser = async () => {
        axios.get(apiurl + 'user', {
            headers: {Authorization: `Bearer ${token}`}
        }).then(response => {
            setUser(response.data);
        }).catch(error => {
            if (error.response.status === 401) {
                logout();
            }
        });
    }

    // Função para fazer login
    const login = async (username, password) => {
        try {
            const response = await axios.post(apiurl + 'auth/login', {
                login: username,
                password: password,
            });
            // Processar a resposta da API aqui, por exemplo, salvar token de autenticação
            if (response.status === 201) {
                let tokenObject = response.data;
                localStorage.setItem('tokenStorage', tokenObject.access_token)
                setToken(tokenObject.access_token);
                setIsLoggedIn(true);
                axios.get(apiurl + 'user', {
                    headers: {Authorization: `Bearer ${tokenObject.access_token}`}
                }).then(response => {
                    setUser(response.data);
                }).catch(error => {
                    if (error.response.status === 401) {
                        logout();
                    }
                });
                await router.push('/');
            }
        } catch (error) {
            console.error('Erro no login:', error);
        }
    };

    // Função para fazer logout
    const logout = () => {
        setIsLoggedIn(false);

        localStorage.removeItem('tokenStorage');

        setUser(null)

        router.push('/');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, token, user, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};
