import React from "react";
import mockup from '../../assets/img/mockup.png';
import prototipo1 from '../../assets/img/prototipo1.png';
import prototipo2 from '../../assets/img/prototipo2.png';
import Header from "../../components/Header/Header";
import SobreCard from "../../components/SobreCard/SobreCard";
import './sobre.css';

export default function Sobre() {
    return (
        <>
            <Header thisPage="sobre" />
            <div className="container-sobre">
                <section className="first-section-sobre">
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
                </section>

                <section className="second-section-sobre">
                    <h2>Planos</h2>
                    <div className="plans-container">
                        <SobreCard title="Individual" buttonText="Cadastrar" type="individual">
                            <ul>
                                <li className="users-information">1 Usuário</li>
                                <li className='videos-information'>10 vídeos ,<b>R$15</b></li>
                            </ul>
                        </SobreCard>
                        <SobreCard title="Profissional - Times" buttonText="Cadastrar" type="professional">
                            <ul>
                                <li className="users-information">1-10 Usuários</li>
                                <li className='videos-information'>Vídeos Ilimitados <b>R$40</b></li>
                                <li className="users-information">+10 Usuários</li>
                                <li className='videos-information'>Vídeos Ilimitados <b>R$20</b></li>
                            </ul>
                        </SobreCard>
                        <SobreCard title="Corporativo" buttonText="Entre em contato" type="corporate">
                            <img src={mockup} alt="Mockup" className="mockup" />
                        </SobreCard>
                    </div>
                </section>
            </div>

        </>
    )
}