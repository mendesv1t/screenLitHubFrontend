import React, {useEffect, useState} from 'react';
import axios from 'axios';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import favoritar from '../assets/favoritar.png';
import nocover from '../assets/nocover.png';
import NextImage from "next/image";

export default function Home() {

    function getRandomLetter() {
        const categorias = ['action', 'horror', 'comedy', 'romance', 'thriller', 'mystery', 'fantasy', 'classic'];
        const randomIndex = Math.floor(Math.random() * categorias.length);
        return categorias[randomIndex];
    }

    function imageProcess(src){
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

    function doneTyping () {
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

            setBooks(response.data.docs)
        });
    }

    return (
        <div style={{width: '100%'}}>
            <section className="banner">
                <div className="banner-card">
                    <h2 className="banner-titulo">Já sabe por onde começar?</h2>
                    <p className="banner-texto">Encontre em nossa estante a sua próxima aventura literária!!</p>
                    <input type="search" className="banner-pesquisa" placeholder="Qual será a sua próxima leitura?" value={busca}
                           onChange={handleBuscaChange} onKeyDown={keyDownHandler} onKeyUp={keyUpHandler}/>
                </div>
            </section>
            <section className="carrossel">
                <h2 className="carrossel-titulo">Livros Populares</h2>
                {books.length === 0 ? <div className="carrossel-carregando"><h1>Carregando</h1><p className="loading"></p></div> : <></>}
                <div className="carrossel-container">
                    {books.map((book, index) => (
                        <div key={index} className="card">
                            <div className="card-descricao" style={{height: '80%'}}>
                                {
                                    book.image ? <img src={'data:image/png;base64,' + book.cover_image}
                                                            style={{width: 'auto', height: '170px'}} alt="Capa do livro"/>
                                        : <NextImage src={nocover} style={{width: 'auto', height: '170px'}} alt="Capa do livro"/>
                                }
                                <div className="descricao">
                                    <h2 className="descricao-titulo-livro">{book.title}</h2>
                                    <h3 className="descricao-autora">{book.author_name}</h3>
                                </div>
                            </div>
                            <div className="card-botoes" style={{height: '20%'}}>
                                <ul className="botoes">
                                    <li className="botoes-item"><NextImage src={favoritar} style={{width: '30px', height: 'auto'}} alt="Adicionar a Estante"/></li>
                                </ul>
                                <a href={'https://openlibrary.org' + book.key} target={"_blank"} className="botoes-ancora">Saiba mais</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
