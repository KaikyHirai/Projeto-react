import React from 'react';
import { pessoas } from "./listarenddata";

export default function Listarend() {
    const filosofos = pessoas.filter(pessoa =>
        pessoa.profissao === 'Filosofo'
    );

    const listarItems = filosofos.map(pessoa => {
        return (
            <li key={pessoa.id}>
                <img 
                    src={pessoa.imgurl}
                    alt={pessoa.nome}
                    className='img-listrend'
                />
                <p>
                    <b>{pessoa.nome}:</b>
                    {' ' + pessoa.profissao + ' '}
                </p>
            </li>
        );
    });

    return (
        <>  
            <div className='container-items'>
                <h1>Listas de Renderização 1.7</h1>
                <ul className='listrend'>
                    {listarItems}
                </ul>
            </div>
        </>
    );
}
