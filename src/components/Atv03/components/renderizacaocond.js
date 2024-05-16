import React from "react";

function Item({nome, foiembalado}) {
    return (
        <li className="item">
            {nome} {foiembalado && '✔'} 
        </li>
    );
}

export default function Listaembalo() {
     return (
        <section className="container-items">
            <h1> Renderização condicional 1.6</h1>
            <h1>Lista de produtos embalados</h1>
            <ul>
                <Item 
                    foiembalado={true}
                    nome="Maça"
                />

                <Item 
                    foiembalado={true}
                    nome="Água"
                />

                <Item 
                    foiembalado={false}
                    nome="Laranjas"
                />
            </ul>
        </section>
     );
}