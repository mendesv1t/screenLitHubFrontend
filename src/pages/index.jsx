import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import favoritar from '../assets/favoritar.png';
import nocover from '../assets/nocover.png';
import NextImage from "next/image";
import {AuthContext} from "@/components/context/authContext";
import favoritado from '../assets/favoritado.png'

export default function Home() {

    function getRandomLetter() {
        const categorias = ['action', 'horror', 'comedy', 'romance', 'thriller', 'mystery', 'fantasy', 'classic'];
        const randomIndex = Math.floor(Math.random() * categorias.length);
        return categorias[randomIndex];
    }

    function imageProcess(src) {
        return new Promise((resolve, reject) => {
            let img = new Image()
            img.onload = () => resolve(img.height)
            img.onerror = reject
            img.src = src
        })
    }

    async function verifySize(base64) {
        let size;

        await imageProcess("data:image/png;base64," + base64).then(r => {
            size = r
        })

        return size > 1;
    }

    const {token, logout, user, updateUser} = useContext(AuthContext);

    const [books, setBooks] = useState([]);

    const [busca, setBusca] = useState('');

    const handleBuscaChange = (event) => {
        setBusca(event.target.value);
    };

    let typingTimer;
    const doneTypingInterval = 3000;

    function keyUpHandler() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }

    function keyDownHandler() {
        clearTimeout(typingTimer);
    }

    function doneTyping() {
        let q;
        if (busca.length > 4) {
            setBooks([])
            q = busca;
        } else {
            q = getRandomLetter();
        }

        getBooks(q)
    }

    let apiurl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        let q = getRandomLetter();

        getBooks(q)
    }, [])

    function getBooks(busca) {
        axios.get(apiurl + 'openLibrary/busca', {
            params: {
                query: busca
            }
        }).then(async response => {
            let docs = response.data.docs;

            for (let doc of docs) {
                doc.image = false;
                await verifySize(doc.cover_image).then(r => {
                    doc.image = r
                })
            }

            setBooks(docs)
        }).catch(error => {
            if (error.response.status === 401) {
                logout();
            }
        });
    }

    async function addCollection(book) {
        let newBook;

        await axios.get(apiurl + 'books' + book.key)
            .then(async response => {
                newBook = response.data;

                axios.put(apiurl + 'books/' + newBook.id, {}, {
                    headers: {Authorization: `Bearer ${token}`}
                }).then(r => {
                    console.log(r)
                }).catch(error => {
                    if (error.response.status === 401) {
                        logout();
                    }
                });
            }).catch(async error => {
                if (error.response && error.response.status === 401) {
                    logout();
                }
                if (error.response && error.response.status === 404) {
                    await axios.post(apiurl + 'books', {
                        'key': book.key,
                        'authors': book.author_name.map(a => {
                            return {'name': a}
                        }),
                        'cover_i': book.cover_i,
                        'title': book.title
                    }, {
                        headers: {Authorization: `Bearer ${token}`}
                    }).then(response => {
                        newBook = response.data.newBook;

                        axios.put(apiurl + 'collection/' + newBook.id, {}, {
                            headers: {Authorization: `Bearer ${token}`}
                        }).then(() => {
                            updateUser();
                        }).catch(error => {
                            if (error.response.status === 401) {
                                logout();
                            }
                        });
                    }).catch(error => {
                        if (error.response.status === 401) {
                            logout();
                        }
                    });
                }
            });
    }

    function removeCollection(book) {
        console.log(book)
        console.log(user)
    }

    return (
        <div style={{width: '100%'}}>
            <section className="banner">
                <div className="banner-card">
                    <h2 className="banner-titulo">Já sabe por onde começar?</h2>
                    <p className="banner-texto">Encontre em nossa estante a sua próxima aventura literária!!</p>
                    <input type="search" className="banner-pesquisa" placeholder="Qual será a sua próxima leitura?"
                           value={busca}
                           onChange={handleBuscaChange} onKeyDown={keyDownHandler} onKeyUp={keyUpHandler}/>
                </div>
            </section>
            <section className="carrossel">
                <h2 className="carrossel-titulo">{busca.length === 0 ? 'Livros Populares' : 'Resultado'}</h2>
                {books.length === 0 ?
                    <div className="carrossel-carregando"><h1>Carregando</h1><p className="loading-carrossel"></p>
                    </div> : <></>}
                <div className="carrossel-container">
                    {books.map((book, index) => (
                        <div key={index} className="card">
                            <div className="card-descricao" style={{height: '80%'}}>
                                {
                                    book.image ? <img src={'data:image/png;base64,' + book.cover_image}
                                                      style={{width: 'auto', height: '170px'}} alt="Capa do livro"/>
                                        : <NextImage src={nocover} style={{width: 'auto', height: '170px'}}
                                                     alt="Capa do livro"/>
                                }
                                <div className="descricao">
                                    <h2 className="descricao-titulo-livro">{book.title}</h2>
                                    <h3 className="descricao-autora">{book.author_name}</h3>
                                </div>
                            </div>
                            <div className="card-botoes" style={{height: '20%'}}>
                                <ul className="botoes">
                                    { user !== null && user.keys.includes(book.key) ? <li className="botoes-item" onClick={() => removeCollection(book)} key={index}>
                                        <NextImage src={favoritado} style={{width: '30px', height: 'auto'}}
                                                   alt="Adicionar a Estante"/></li> : <li className="botoes-item" onClick={() => addCollection(book)} key={index}>
                                        <NextImage src={favoritar} style={{width: '30px', height: 'auto'}}
                                                   alt="Adicionar a Estante"/></li>}


                                </ul>
                                <a href={'https://openlibrary.org' + book.key} target={"_blank"}
                                   className="botoes-ancora">Saiba mais</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
