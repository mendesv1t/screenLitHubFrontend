import Image from "next/image";
import logo from "@/assets/Logo.png";
import {AuthContext} from './context/authContext';
import React, {useContext} from 'react';
import Link from "next/link";
import usuario from '../assets/usuario.png'
import logoutImg from '../assets/logoutImg.png'
import login from '../assets/login.png'

export default function NavBar() {
    const {isLoggedIn, logout} = useContext(AuthContext);

    const handleLogout = (event) => {
        event.preventDefault();

        logout();
    };

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
                                <Link href={{ pathname: '/categoria', query: { keyword: 'romance' } }} className="lista-menu-link">Romance</Link>
                            </li>
                            <li className="lista-menu-item">
                                <Link href={{ pathname: '/categoria', query: { keyword: 'aventura' } }} className="lista-menu-link">Aventura</Link>
                            </li>
                            <li className="lista-menu-item">
                                <Link href={{ pathname: '/categoria', query: { keyword: 'terror' } }} className="lista-menu-link">Terror</Link>
                            </li>
                            <li className="lista-menu-item">
                                <Link href={{ pathname: '/categoria', query: { keyword: 'comedia' } }} className="lista-menu-link">Comédia</Link>
                            </li>
                            <li className="lista-menu-item">
                                <Link href={{ pathname: '/categoria', query: { keyword: 'fantasia' } }} className="lista-menu-link">Fantasia</Link>
                            </li>
                        </ul>
                    </>
                    : <></>}
                <Image src={logo} alt="Logo do ScreenLitHub"
                       className="container-imagem"/>
                <Link href="/" style={{ textDecoration: 'none', color: 'var(--primaria)' }}><h1 className="container-titulo"><b className="container-titulo-negrito">ScreenLitHub</b></h1></Link>
            </div>

            {isLoggedIn ? <ul className="opcoes">
                    <input type="checkbox" id="opcoes-menu" className="opcoes-botao"/>
                    <label htmlFor="opcoes-menu" className="opcoes-rotulo">
                        <li className="opcoes-item">Categorias</li>
                    </label>

                    <ul className="lista-menu">
                        <li className="lista-menu-item">
                            <Link href={{ pathname: '/categoria', query: { keyword: 'romance' } }} className="lista-menu-link">Romance</Link>
                        </li>
                        <li className="lista-menu-item">
                            <Link href={{ pathname: '/categoria', query: { keyword: 'aventura' } }} className="lista-menu-link">Aventura</Link>
                        </li>
                        <li className="lista-menu-item">
                            <Link href={{ pathname: '/categoria', query: { keyword: 'terror' } }} className="lista-menu-link">Terror</Link>
                        </li>
                        <li className="lista-menu-item">
                            <Link href={{ pathname: '/categoria', query: { keyword: 'comedia' } }} className="lista-menu-link">Comédia</Link>
                        </li>
                        <li className="lista-menu-item">
                            <Link href={{ pathname: '/categoria', query: { keyword: 'fantasia' } }} className="lista-menu-link">Fantasia</Link>
                        </li>
                    </ul>

                    <li className="opcoes-item"><Link className="opcoes-item-link" href="/estante">Minha Estante</Link></li>
                </ul>
                : <></>}

            <div className="container">
                {isLoggedIn ?
                    <div style={{display: 'inline-flex'}}>
                        <Link href="/" className="container-link" style={{color: 'var(--primaria)', fontsize: 'large'}}>
                            <Image src={logoutImg} alt="Sair" onClick={handleLogout} style={{width: '40px', height: 'auto'}}></Image>
                        </Link>
                    </div>
                    :
                    <Link href="/login" className="container-link" style={{color: 'var(--primaria)', fontsize: 'large'}}>
                        <Image src={login} alt="Login"></Image>
                    </Link>
                }
            </div>
        </header>
    )
}