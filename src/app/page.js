import logo from '../assets/Logo.png'
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="cabecalho">
        <div className="container">
          <input type="checkbox" id="menu" className="container-botao"/>
            <label htmlFor="menu" className="container-rotulo">
              <span className="cabecalho-menu-hamburguer container-imagem" style={{padding: '1em'}}></span>
            </label>
            <ul className="lista-menu">
              <li className="lista-menu-titulo">Categorias</li>
              <li className="lista-menu-item">
                <a href="#" className="lista-menu-link">Romance</a>
              </li>
              <li className="lista-menu-item">
                <a href="#" className="lista-menu-link">Aventura</a>
              </li>
              <li className="lista-menu-item">
                <a href="#" className="lista-menu-link">Terror</a>
              </li>
              <li className="lista-menu-item">
                <a href="#" className="lista-menu-link">Romance Policial</a>
              </li>
              <li className="lista-menu-item">
                <a href="#" className="lista-menu-link">Comédia</a>
              </li>
            </ul>
            <Image src={logo} style={{width: '4vw', height: 'auto'}} alt="Logo do ScreenLitHub" className="container-imagem"/>
              <h1 className="container-titulo"><b className="container-titulo-negrito">ScreenLitHub</b></h1>
        </div>

        <ul className="opcoes">
          <input type="checkbox" id="opcoes-menu" className="opcoes-botao"/>
            <label htmlFor="opcoes-menu" className="opcoes-rotulo">
              <li className="opcoes-item">Categorias</li>
            </label>

            <ul className="lista-menu">
            <li className="lista-menu-item">
                <a href="#" className="lista-menu-link">Romance</a>
              </li>
              <li className="lista-menu-item">
                <a href="#" className="lista-menu-link">Aventura</a>
              </li>
              <li className="lista-menu-item">
                <a href="#" className="lista-menu-link">Terror</a>
              </li>
              <li className="lista-menu-item">
                <a href="#" className="lista-menu-link">Romance Policial</a>
              </li>
              <li className="lista-menu-item">
                <a href="#" className="lista-menu-link">Comédia</a>
              </li>
            </ul>

            <li className="opcoes-item"><a className="opcoes-item-link" href="#">Favoritos</a></li>
            <li className="opcoes-item"><a className="opcoes-item-link" href="#">Minha Estante</a></li>
        </ul>

        <div className="container">
          <a href="#"><img src="../assets/Favoritos.svg" alt="Meus Favoritos"
                           className="container-imagem container-imagem-favoritos"/></a>
          <a href="#" className="container-link">
            <img src="../assets/Compras.svg" alt="Minhas Leituras" className="container-imagem"/>
              <p className="container-texto">Minha sacola</p>
          </a>
          <a href="#" className="container-link">
            <img src="../assets/Usuário.svg" alt="Meu perfil" className="container-imagem"/>
              <p className="container-texto">Meu perfil</p>
          </a>
        </div>
      </header>

      <section className="banner">
        <div className="banner-card">
          <h2 className="banner-titulo">Já sabe por onde começar?</h2>
          <p className="banner-texto">Encontre em nossa estante a sua próxima aventura literária!</p>
          <input type="search" className="banner-pesquisa" placeholder="Qual será a sua próxima leitura?"/>
        </div>
      </section>
      <section className="carrossel">
        <h2 className="carrossel-titulo">Últimos lançamentos</h2>

        <div className="carrossel-container">
          <div className="swiper">

            <div className="swiper-pagination"></div>
            <div className="swiper-wrapper">
              <div className="swiper-slide"><img src="../assets/livros/ApacheKafka.svg" alt="Livro Apache Kafka"/></div>
              <div className="swiper-slide"><img src="../assets/livros/Guia Front-end.svg" alt="Livro Guia Front-end"/>
              </div>
              <div className="swiper-slide"><img src="../assets/livros/Portugol.svg" alt="Livro Portugol"/></div>
              <div className="swiper-slide"><img src="../assets/livros/Gestão2.svg" alt="Livro Gestao"/></div>
              <div className="swiper-slide"><img src="../assets/livros/Liderança.svg" alt="Livro Liderança"/></div>
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
              <img src="../assets/Angular.svg" alt="Angular" className="descricao-imagem"/>
            </div>
            <div className="card-botoes">
              <ul className="botoes">
                <li className="botoes-item"><img src="../assets/Favoritos.svg" alt="Favoritar livro"/></li>
                <li className="botoes-item"><img src="../assets/Compras.svg" alt="Adicionar ao carrinho"/></li>
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
              <div className="swiper-slide"><img src="../assets/maisvendidos/Arquitetura.svg" alt="Livro Apache Kafka"/>
              </div>
              <div className="swiper-slide"><img src="../assets/maisvendidos/Javascript.svg" alt="Livro Guia Front-end"/>
              </div>
              <div className="swiper-slide"><img src="../assets/maisvendidos/Nodejs.svg" alt="Livro Portugol"/></div>
              <div className="swiper-slide"><img src="../assets/maisvendidos/ReactNative.svg" alt="Livro Gestao"/></div>
              <div className="swiper-slide"><img src="../assets/maisvendidos/Tuning.svg" alt="Livro Liderança"/></div>
            </div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
          <div className="card">
            <div className="card-descricao">
              <div className="descricao">
                <ul className="estrelinhas">
                  <li><img src="../assets/star.svg" className="estrela" alt=""/></li>
                  <li><img src="../assets/star.svg" className="estrela" alt=""/></li>
                  <li><img src="../assets/star.svg" className="estrela" alt=""/></li>
                  <li><img src="../assets/star.svg" className="estrela" alt=""/></li>
                  <li><img src="../assets/star.svg" className="estrela" alt=""/></li>
                </ul>
                <h3 className="descricao-autora">Autora do mês</h3>
                <h2 className="descricao-titulo-livro">Juliana Agarikov</h2>
                <p className="descricao-texto">Analista de sistemas e escritora, Juliana é especialista em Front-End.
                </p>
              </div>
              <img src="../assets/escritora.svg" alt="Escritora" className="descricao-imagem"/>
            </div>
            <div className="card-botoes">
              <ul className="botoes">
                <li className="botoes-item"><img src="../assets/Favoritos.svg" alt="Favoritar livro"/></li>
                <li className="botoes-item"><img src="../assets/Compras.svg" alt="Adicionar ao carrinho"/></li>
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
        <footer className="rodape">
          <p className="rodape-titulo">Grupo Alura</p>
          <ul className="rodape-lista">
            <li className="rodape-lista-titulo">Educação</li>
            <li className="rodape-lista-item">
              <img src="../assets/educacao/CasaDoCodigo.svg" alt="Logo da Casa do Código"/>
                <a href="#" className="rodape-lista-link">Casa do Código</a>
            </li>
            <li className="rodape-lista-item">
              <img src="../assets/educacao/Caelum.svg" alt="Logo da Caelum"/>
                <a href="#" className="rodape-lista-link">Caelum</a>
            </li>
          </ul>
          <ul className="rodape-lista">
            <li className="rodape-lista-titulo">Educação Online</li>
            <li className="rodape-lista-item">
              <img src="../assets/educacaoOnline/Alura.svg" alt="Logo da Alura"/>
                <a href="#" className="rodape-lista-link">Casa do Código</a>
            </li>
            <li className="rodape-lista-item">
              <img src="../assets/educacaoOnline/AluraEmpresas.svg" alt="Logo da Alura Empresas"/>
                <a href="#" className="rodape-lista-link">Alura Para Empresas</a>
            </li>
            <li className="rodape-lista-item">
              <img src="../assets/educacaoOnline/AluraLatam.svg" alt="Logo da Alura Latam"/>
                <a href="#" className="rodape-lista-link">Alura LATAM</a>
            </li>
            <li className="rodape-lista-item">
              <img src="../assets/educacaoOnline/AluraStart.svg" alt="Logo da Alura Start"/>
                <a href="#" className="rodape-lista-link">Alura Start</a>
            </li>
            <li className="rodape-lista-item">
              <img src="../assets/educacaoOnline/MusicDot.svg" alt="Logo da MusicDot"/>
                <a href="#" className="rodape-lista-link">MusicDot</a>
            </li>
            <li className="rodape-lista-item">
              <img src="../assets/educacaoOnline/AluraLingua.svg" alt="Logo da Alura Língua"/>
                <a href="#" className="rodape-lista-link">Alura Língua</a>
            </li>
            <li className="rodape-lista-item">
              <img src="../assets/educacaoOnline/PM3.svg" alt="Logo da PM3"/>
                <a href="#" className="rodape-lista-link">PM3</a>
            </li>
          </ul>
          <ul className="rodape-lista">
            <li className="rodape-lista-titulo">Comunidade</li>
            <li className="rodape-lista-item">
              <img src="../assets/comunidade/HipstersTech.svg" alt="Logo da Hipsters Ponto Tech"/>
                <a href="#" className="rodape-lista-link">Hipsters ponto Tech</a>
            </li>
            <li className="rodape-lista-item">
              <img src="../assets/comunidade/Scuba.svg" alt="Logo da Scuba dev"/>
                <a href="#" className="rodape-lista-link">Scuba Dev</a>
            </li>
            <li className="rodape-lista-item">
              <img src="../assets/comunidade/Layers.svg" alt="Logo da Layers ponto Tech"/>
                <a href="#" className="rodape-lista-link">Layers ponto Tech</a>
            </li>
            <li className="rodape-lista-item">
              <img src="../assets/comunidade/LikeABoss.svg" alt="Logo da Like a Boss"/>
                <a href="#" className="rodape-lista-link">like a Boss</a>
            </li>
            <li className="rodape-lista-item">
              <img src="../assets/comunidade/CarreiraSemFronteira.svg" alt="Logo da Carreira sem Fronteira"/>
                <a href="#" className="rodape-lista-link">Carreira sem Fronteira</a>
            </li>
            <li className="rodape-lista-item">
              <img src="../assets/comunidade/HipstersJobs.svg" alt="Logo da Hipsters ponto Jobs"/>
                <a href="#" className="rodape-lista-link">Hipsters ponto Jobs</a>
            </li>
            <li className="rodape-lista-item">
              <img src="../assets/comunidade/GUJ.svg" alt="Logo da GUJ"/>
                <a href="#" className="rodape-lista-link">GUJ</a>
            </li>
          </ul>
        </footer>
    </main>
  )
}
