import React from "react";
import './mainCard.css';

export default function MainCard({numberCard, iconCard, titleCard, textCard, backgroundColor}) {
    return(
        <div className="main-card" style={{backgroundColor: backgroundColor}}>
            <div className="topCard">
                <span className="numberCard">{numberCard}</span>
                <img className="iconCard" src={iconCard} alt="Ícone do Card" />
            </div>
            <h2 className="titleCard">{titleCard}</h2>
            <p className="textCard">{textCard}</p>
        </div>
    );
}