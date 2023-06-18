import githubAzul from '../assets/icone-github-bleu.png'
import githubRoxo from '../assets/icone-github-violet.png'
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="rodape footer">
            <div style={{display: "flex",justifyContent:"space-around",alignItems: "center", height: "100%",width: "100%"}}>
                <a href="https://github.com/luizferreira7">
                    <Image
                        src={githubAzul}
                        style={{ height: "48px", width: "auto" }}
                        alt="logo"
                        title='Luiz Carlos Ferreira'
                    />
                </a>
                <h6 className="block tracking-wide text-gray-500 text-sm font-bold mb-1" style={{fontFamily: "DalekPinpoint", fontWeight: "400", fontSize: "15pt", color: "black"}}>Autores</h6>
                <a href="https://github.com/mendesv1t/">
                    <Image
                        src={githubRoxo}
                        style={{ height: "48px", width: "auto" }}
                        alt="logo"
                        title='Vitoria Chaves'
                    />
                </a>
            </div>
        </footer>
    )
}