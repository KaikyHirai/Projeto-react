import React from "react";

function Profile(){
    return (
        <div className="container-profile">
            <img src="https://s2-epocanegocios.glbimg.com/T4Ps-mjEDqSHJYcPnfa_YIJv-IY=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_e536e40f1baf4c1a8bf1ed12d20577fd/internal_photos/bs/2024/e/e/vCK8w5TZ2Niem44djUzQ/439191105-450937044124834-8678751219846377278-n.jpg"
            
            alt="Mark Zuckerberg"
            />
        </div>
    );
}

export default function Gallery(){
    return (
        <>
        <h1>Importanto e exportando componentes 1.2</h1>
        <h1>É o Mark não tem como</h1>
        <section className="section-gallery">
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
        </>
    )
}