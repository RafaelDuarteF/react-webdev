import React from "react";
import Header from "../../components/Header/Header";
import './home.css';
import mainImage from '../../assets/img/main-image.png';
import MainCard from "../../components/mainCard/MainCard";

import YtIcon from '../../assets/img/ytIcon.png';
import TtIcon from '../../assets/img/ttIcon.png';
import IgIcon from '../../assets/img/igIcon.png';
import FbIcon from '../../assets/img/fbIcon.png';

export default function Home() {
    return(
        <>
            <Header thisPage="home" />
            <div className="container-home">
                <section className="first-section-home">
                    <div className="left-container-home">
                        <h1>Crie seus vídeos online</h1>
                        <p>
                            Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.
                        </p>
                        <button>Começar agora!</button>
                    </div>
                    <div className="right-container-home">
                        <img src={mainImage} alt="Imagem Principal" />
                    </div>
                </section>
                <section className="second-section-home">
                    <MainCard numberCard={'01'} iconCard={YtIcon} titleCard={'Youtube'} textCard={'Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.'} backgroundColor={'#F1C2B0'} />
                    <MainCard numberCard={'02'} iconCard={TtIcon} titleCard={'TikTok'} textCard={'Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.'} backgroundColor={'#F9EB98'} />
                    <MainCard numberCard={'03'} iconCard={FbIcon} titleCard={'Facebook'} textCard={'Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.'} backgroundColor={'#C0D9DD'} />
                    <MainCard numberCard={'04'} iconCard={IgIcon} titleCard={'Instagram'} textCard={'Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.'} backgroundColor={'#6975E8'} />
                </section>
            </div>
        </>
    )
}