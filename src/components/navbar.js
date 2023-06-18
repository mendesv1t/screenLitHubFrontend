import Image from "next/image";
import logo from "@/assets/Logo.png";
import {AuthContext} from './context/authContext';
import React, {useContext} from 'react';

export default function NavBar() {
    const {isLoggedIn} = useContext(AuthContext);

    return (
        <header className="cabecalho">
            <div className="container">
                {isLoggedIn ?
                    <>
                        <input type="checkbox" id="menu" className="container-botao"/>
                        <label htmlFor="menu" className="container-rotulo">
                            <span className="cabecalho-menu-hamburguer container-imagem"
                                  style={{padding: '1em'}}></span>
                        </label>
                        <ul className="lista-menu">
                            <li className="lista-menu-titulo">Categorias</li>
                            <li className="lista-menu-item">
                                <a href="#" className="lista-menu-link">Programação</a>
                            </li>
                            <li className="lista-menu-item">
                                <a href="#" className="lista-menu-link">Front-end</a>
                            </li>
                            <li className="lista-menu-item">
                                <a href="#" className="lista-menu-link">Infraestrutura</a>
                            </li>
                            <li className="lista-menu-item">
                                <a href="#" className="lista-menu-link">Business</a>
                            </li>
                            <li className="lista-menu-item">
                                <a href="#" className="lista-menu-link">Design e UX</a>
                            </li>
                        </ul>
                    </>
                    : <></>}
                <Image src={logo} style={{width: '4vw', height: 'auto'}} alt="Logo do ScreenLitHub"
                       className="container-imagem"/>
                <h1 className="container-titulo"><b className="container-titulo-negrito">ScreenLitHub</b></h1>
            </div>

            {isLoggedIn ? <ul className="opcoes">
                    <input type="checkbox" id="opcoes-menu" className="opcoes-botao"/>
                    <label htmlFor="opcoes-menu" className="opcoes-rotulo">
                        <li className="opcoes-item">Categorias</li>
                    </label>

                    <ul className="lista-menu">
                        <li className="lista-menu-item">
                            <a href="#" className="lista-menu-link">Programação</a>
                        </li>
                        <li className="lista-menu-item">
                            <a href="#" className="lista-menu-link">Front-end</a>
                        </li>
                        <li className="lista-menu-item">
                            <a href="#" className="lista-menu-link">Infraestrutura</a>
                        </li>
                        <li className="lista-menu-item">
                            <a href="#" className="lista-menu-link">Business</a>
                        </li>
                        <li className="lista-menu-item">
                            <a href="#" className="lista-menu-link">Design e UX</a>
                        </li>
                    </ul>

                    <li className="opcoes-item"><a className="opcoes-item-link" href="#">Favoritos</a></li>
                    <li className="opcoes-item"><a className="opcoes-item-link" href="#">Minha Estante</a></li>
                </ul>
                : <></>}

            <div className="container">
                {isLoggedIn ?
                    <a href="#" className="container-link">
                        <img src="../assets/Usuário.svg" alt="Meu perfil" className="container-imagem"/>
                        <p className="container-texto">Meu perfil</p>
                    </a>
                    :
                    <a href="/login" className="container-link">
                        <img src="../assets/Usuário.svg" alt="Login" className="container-imagem"/>
                        <p className="container-texto">Login</p>
                    </a>
                }
            </div>
        </header>
    )
}