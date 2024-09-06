import React from "react";
import './header.css';
import { useNavigate } from "react-router-dom";

export default function Header({thisPage}) {

    const navigate = useNavigate();

    const handleChangePage = (page) => {
        navigate(page);
        console.log(page)
    }

    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="#" onClick={() => handleChangePage('/')} className={thisPage == 'home' ? 'underline' : ''}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => handleChangePage('/sobre')} className={thisPage == 'sobre' ? 'underline' : ''}>
                            Sobre
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => handleChangePage('/contato')} className={thisPage == 'contato' ? 'underline' : ''}>
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}