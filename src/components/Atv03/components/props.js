import React from 'react';
import Avatar from './propsavatar'

function Card({children}) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default function Profileprop() {
    return (
        <Card>
            <h1>Passando props para um componente 1.5</h1>
            <Avatar 
                width={300}
                height={200}
                pessoa={{
                    nome: 'Elon Musk',
                    imgurl: 'https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-2.jpg'
                }}
            />
        </Card>
    );
}