import React from "react";
import Header from "../../components/Header/Header";
import './sobre.css';
import prototipo1 from '../../assets/img/prototipo1.png';
import prototipo2 from '../../assets/img/prototipo2.png';

export default function Sobre() {
    return(
        <>
            <Header thisPage="sobre" />
            <div className="container-sobre">
                <div className="left-container-sobre">
                    <h1>Bem-vindo à revolução dos vídeos!</h1>
                    <p>Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, 
                        capaz de atingir uma audiência de milhões de seguidores.
                    </p>
                    <button>Baixe o app</button>
                </div>
                <div className="right-container-sobre">
                    <img src={prototipo1} alt="Protótipo do app" />
                    <img src={prototipo2} alt="Protótipo do app" />
                </div>
            </div>
        </>
    )
}