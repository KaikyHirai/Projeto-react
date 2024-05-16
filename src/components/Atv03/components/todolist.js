import React from "react";

export default function TodosList() {
    return (
        <div className="container-todoslist">
            <h1>Escrevendo marcações com JSX 1.3</h1>
            <h1>Mark Zuckerberg</h1>
            <img
                src="https://s2-epocanegocios.glbimg.com/T4Ps-mjEDqSHJYcPnfa_YIJv-IY=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_e536e40f1baf4c1a8bf1ed12d20577fd/internal_photos/bs/2024/e/e/vCK8w5TZ2Niem44djUzQ/439191105-450937044124834-8678751219846377278-n.jpg"
                alt="Mark zuckerberg"
                className="img-todoslist"
            />

            <ul>
                <li>Dono da empresa META</li>
                <li>Co-Fundados do Facebook</li>
                <li>Redefiniu o conceito de interação na internet</li>
            </ul>
        </div>
    );
}