import React from "react";
import Header from "../../components/Header/Header";
import './sobre.css';
import prototipo1 from '../../assets/img/prototipo1.png';
import prototipo2 from '../../assets/img/prototipo2.png';
import mockup from '../../assets/img/mockup.png';
import { User, Users } from 'lucide-react';
import SobreCard from "../../components/SobreCard/SobreCard";

export default function Sobre() {
    return(
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
                            <User size={24} />
                            <ul>
                                <li>1 Usuário</li>
                                <li>10 vídeos R$15</li>
                            </ul>
                        </SobreCard>
                        <SobreCard title="Profissional - Times" buttonText="Cadastrar" type="professional">
                            <Users size={24} />
                            <ul>
                                <li>1-10 Usuários</li>
                                <li>Vídeos Ilimitados R$40</li>
                                <li>+10 Usuários</li>
                                <li>Vídeos Ilimitados R$20</li>
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