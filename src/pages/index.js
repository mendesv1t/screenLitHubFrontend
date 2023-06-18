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
        </div>
    )
}
