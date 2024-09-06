import React from "react";
import Header from "../../components/Header/Header";
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



export default function Contact() {
    return (
        <>
            <Header thisPage="contato" />
            <div className="container">
                <div className="left">
                    <h2>Dúvidas e suporte, entre em contato:</h2>
                    <div className="social-icons">
                        <a className="icon-social" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} style={{ color: "#1D9BF0", fontSize: "40px" }} />
                        </a>
                        <a className="icon-social" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} style={{ color: "rgb(228, 64, 95)", fontSize: "40px" }} />
                        </a>
                        <a className="icon-social" href="https://discord.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faDiscord} style={{ color: "#7289da", fontSize: "40px" }} />
                        </a>
                    </div>
                </div>
                <div className="right">
                    <form className="contact-form">
                        <div className="form-input-label">
                            <label htmlFor="name">Nome:</label>
                            <input type="text" id="name" placeholder="Digite seu nome" required />
                        </div>
                        <div className="form-input-label">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id="email" placeholder="Digite seu e-mail" required />
                        </div>

                        <label htmlFor="message">Mensagem:</label>
                        <textarea id="message" placeholder="Escreva sua mensagem" required />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}