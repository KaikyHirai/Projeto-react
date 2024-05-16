import React from 'react';

const pessoa = {
    nome: 'Elon Musk',
    img: 'https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-2.jpg'
};

export default function Todolistcomchaves() {
    return (
        <div className="container-todoslist">
            <h1>JavaScript em JSX com chaves 1.4</h1>
            <h1>Curiosidades sobre o {pessoa.nome}</h1>
            <img
                className='img-todoslist'
                src={pessoa.img}
                alt={pessoa.nome}
            />
            <ul>
                <li>Dono da SpaceX</li>
                <li>Fundador da Tesla</li>
                <li>Dono do Twitter / X</li>
            </ul>
        </div>
    );
}