export default function Home() {
    return (
        <div style={{width: '100%'}}>
            <section className="banner">
                <div className="banner-card">
                    <h2 className="banner-titulo">Já sabe por onde começar?</h2>
                    <p className="banner-texto">Encontre em nossa estante o que precisa para seu desenvolvimento!</p>
                    <input type="search" className="banner-pesquisa" placeholder="Qual será a sua próxima leitura?"/>
                </div>
            </section>
            <section className="carrossel">
                <h2 className="carrossel-titulo">Últimos lançamentos</h2>

                <div className="carrossel-container">
                    <div className="swiper">

                        <div className="swiper-pagination"></div>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"><img alt="Livro Apache Kafka"/></div>
                            <div className="swiper-slide"><img alt="Livro Guia Front-end"/>
                            </div>
                            <div className="swiper-slide"><img alt="Livro Portugol"/></div>
                            <div className="swiper-slide"><img alt="Livro Gestao"/></div>
                            <div className="swiper-slide"><img alt="Livro Liderança"/></div>
                        </div>

                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                    <div className="card">
                        <div className="card-descricao">
                            <div className="descricao">
                                <h3 className="descricao-titulo">Talvez você também se interesse por...</h3>
                                <h2 className="descricao-titulo-livro">Angular 11 e Firebase</h2>
                                <p className="descricao-texto">Construindo uma aplicação integrada com a plataforma do Google.</p>
                            </div>
                            <img alt="Angular" className="descricao-imagem"/>
                        </div>
                        <div className="card-botoes">
                            <ul className="botoes">
                                <li className="botoes-item"><img alt="Favoritar livro"/></li>
                                <li className="botoes-item"><img alt="Adicionar ao carrinho"/></li>
                            </ul>
                            <a href="#" className="botoes-ancora">Saiba mais</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="carrossel">
                <h2 className="carrossel-titulo">Mais vendidos</h2>
                <div className="carrossel-container">
                    <div className="swiper">
                        <div className="swiper-pagination"></div>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"><img alt="Livro Apache Kafka"/>
                            </div>
                            <div className="swiper-slide"><img alt="Livro Guia Front-end"/>
                            </div>
                            <div className="swiper-slide"><img alt="Livro Portugol"/></div>
                            <div className="swiper-slide"><img alt="Livro Gestao"/></div>
                            <div className="swiper-slide"><img alt="Livro Liderança"/></div>
                        </div>

                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                    <div className="card">
                        <div className="card-descricao">
                            <div className="descricao">
                                <ul className="estrelinhas">
                                    <li><img className="estrela" alt=""/></li>
                                    <li><img className="estrela" alt=""/></li>
                                    <li><img className="estrela" alt=""/></li>
                                    <li><img className="estrela" alt=""/></li>
                                    <li><img className="estrela" alt=""/></li>
                                </ul>
                                <h3 className="descricao-autora">Autora do mês</h3>
                                <h2 className="descricao-titulo-livro">Juliana Agarikov</h2>
                                <p className="descricao-texto">Analista de sistemas e escritora, Juliana é especialista em Front-End.
                                </p>
                            </div>
                            <img alt="Escritora" className="descricao-imagem"/>
                        </div>
                        <div className="card-botoes">
                            <ul className="botoes">
                                <li className="botoes-item"><img alt="Favoritar livro"/></li>
                                <li className="botoes-item"><img alt="Adicionar ao carrinho"/></li>
                            </ul>
                            <a href="#" className="botoes-ancora">Saiba mais</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="topicos">
                <h2 className="topicos-titulo">Tópicos visitados recentemente</h2>
                <ul className="topicos-lista">
                    <li className="topicos-item">
                        <a href="#" className="topicos-item-link">Android</a>
                    </li>
                    <li className="topicos-item">
                        <a href="#" className="topicos-item-link">Marketing Digital</a>
                    </li>
                    <li className="topicos-item">
                        <a href="#" className="topicos-item-link">Agile</a>
                    </li>
                    <li className="topicos-item">
                        <a href="#" className="topicos-item-link">Startups</a>
                    </li>
                    <li className="topicos-item">
                        <a href="#" className="topicos-item-link">HTML e CSS</a>
                    </li>
                    <li className="topicos-item">
                        <a href="#" className="topicos-item-link">Python</a>
                    </li>
                    <li className="topicos-item">
                        <a href="#" className="topicos-item-link">OO</a>
                    </li>
                    <li className="topicos-item">
                        <a href="#" className="topicos-item-link">Java</a>
                    </li>
                </ul>
            </section>
            <section className="contato">
                <div className="contato-descricao">
                    <h2 className="contato-titulo">Fique por dentro das novidades!</h2>
                    <p className="contato-texto">Atualizações de e-books, novos livros, promoções e outros.</p>
                </div>
                <input type="email" className="banner-email" placeholder="Cadastre seu email"/>
            </section>
        </div>
    )
}
