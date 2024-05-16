import React from 'react';

export default function Avatar({pessoa, width, height}) {
    return (
        <img
            className='avatar'
            src={pessoa.imgurl}
            alt={pessoa.nome}
            width={width}
            height={height}
        />
    );
}