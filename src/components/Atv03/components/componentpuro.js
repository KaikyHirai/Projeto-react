import React from "react";

function Cup({ convidado }) {
    return <h2>Uma chícara de café para o convidado #{convidado}</h2>;
}

export default function Cafegathering() {
    let chicaras = [];
    for (let i = 0; i < 10; i++) {
        chicaras.push(<Cup key={i} convidado={i + 1} />);
    }
    return (
         <div className="container-items">
            <h1>Mantendo os componentes Puros 1.8</h1>
            {chicaras}
        </div>
    );
}