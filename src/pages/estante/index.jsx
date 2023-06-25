import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "@/components/context/authContext";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import cloneDeep from "lodash/cloneDeep";
import nocover from "@/assets/nocover.png";
import NextImage from "next/image";
import favoritado from "@/assets/favoritado.png";
import favoritar from "@/assets/favoritar.png";
import axios from "axios";

const EstantePage = () => {

    function imageProcess(src) {
        return new Promise((resolve, reject) => {
            let img = new Image()
            img.onload = () => resolve(img.height)
            img.onerror = reject
            img.src = src
        })
    }

    async function verifySize(url) {
        let size;

        await imageProcess(url).then(r => {
            size = r
        })

        return size > 1;
    }

    const {token, logout, user, updateUser} = useContext(AuthContext);

    const [books, setBooks] = useState([]);

    let apiurl = process.env.NEXT_PUBLIC_API_URL;

    function loadImages(docs) {
        return new Promise(async () => {
            for (const doc of docs) {
                doc.image = await verifySize(doc.cover_image);
                setBooks(cloneDeep(docs));
            }
        })
    }

    useEffect(() => {
        if (user === null) return

        setBooks(user.books)
    }, [user])

    const [loadingBooks, setLoadingsBooks] = useState([]);

    function removeCollection(book) {
        loadingBooks.push(book.key)
        let index = loadingBooks.length - 1;

        setLoadingsBooks(cloneDeep(loadingBooks));

        axios.delete(apiurl + 'collection/' + book.id, {
            headers: {Authorization: `Bearer ${token}`}
        }).then(async () => {
            await updateUser().then(() => {
                loadingBooks.splice(index, 1);
                setLoadingsBooks(cloneDeep(loadingBooks))
            });

        }).catch(error => {
            if (error.response.status === 401) {
                logout();
            }
        });
    }

    return (
        <div style={{width: '100%'}}>
            <section className="carrossel">
                <h2 className="carrossel-titulo">{'Mnha Estante'}</h2>
                {books.length === 0 ?
                    <div className="carrossel-carregando"><h1>Carregando</h1><p className="loading-carrossel"></p>
                    </div> : <></>}
                <div className="carrossel-container">
                    {books.map((book, index) => (
                        <div key={index} className="card">
                            <div className="card-descricao" style={{height: '80%'}}>
                                {book.image ? <img src={book.cover_image}
                                                   style={{width: 'auto', height: '170px'}}
                                                   alt="Capa do livro"/>
                                    : <img src={nocover.src}
                                           style={{width: 'auto', height: '170px'}}
                                           alt="Capa do livro"/>}
                                <div className="descricao">
                                    <h2 className="descricao-titulo-livro">{book.title}</h2>
                                    <h3 className="descricao-autora">{book.author_name}</h3>
                                </div>
                            </div>
                            <div className="card-botoes" style={{height: '20%'}}>
                                <ul className="botoes">
                                    { user !== null && user.keys.includes(book.key) && !loadingBooks.includes(book.key) ?
                                        <li className="botoes-item" onClick={() => removeCollection(book)} key={index}>
                                            <NextImage src={favoritado} style={{width: '30px', height: 'auto'}}
                                                       alt="Adicionar a Estante"/></li>
                                        :
                                        <li className="loading-favorite" key={index}></li>}
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

export default EstantePage;