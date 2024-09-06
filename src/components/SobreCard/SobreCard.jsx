import React from "react";
import './sobreCard.css';
import { User, Users } from 'lucide-react';

export default function SobreCard({title, buttonText, type, children}) {
    return(
        <div className={`plan ${type}`}>
            <h3>{title}</h3>
            {children}
            <button className="cadastrar">{buttonText}</button>
        </div>
    );
}