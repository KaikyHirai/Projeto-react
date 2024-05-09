import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImgAvatarHomen from "./assets/icons8-pessoa-80.png";
import ImgAvatarMulher from "./assets/icons8-mulher-96.png";
import ImgRelaod from "./assets/recarregar.png";
import './css/styleContador.css';

function Botoes({nome, urlavatar, onContadorChange}) {
    const [contador, setContador] = useState(0);

    const clickIncrement = () => {
        setContador(contador + 1);
        onContadorChange(nome, 1); // Incrementa o contador total
    };

    const clickDecrement = () => {
        if(contador > 0){
            setContador(contador - 1);
            onContadorChange(nome, -1); // Decrementa o contador total
        }
        else{
            setContador(contador);
        }
    };

    return (
        <div className="container-botoes">
            <img src={urlavatar} alt={nome} />
            <div className="botoes-addsub ">
                <button onClick={clickIncrement}>+</button>
                <button onClick={clickDecrement}>-</button>
            </div>
            <h1>{nome}</h1>
            <div className="exibicao-contador">
                <h1>{contador}</h1>
            </div>
        </div>
    );
}


export default function Contador() {
    const [total, setTotal] = useState(0);

    const handleContadorChange = (nome, valor) => {
        setTotal(prevTotal => {
            // Incrementa ou decrementa o total com base no nome e no valor recebidos
            if(nome === "Homen"){
                return prevTotal += valor;
            }
            else if(nome === "Mulher"){
                return prevTotal += valor;
            }
        });
    };

    const clickReload = () => {
        window.location.reload();
    }

    return (
        <>
            <div className="container-contador">
                <div className="container-total">
                    <h1>Total</h1>
                    <div className="caixa-total"><h1>{total}</h1></div>
                </div>
                <div className="container-infcontador">
                    <Botoes nome="Homen" urlavatar={ImgAvatarHomen} onContadorChange={handleContadorChange}/>
                    <Botoes nome="Mulher" urlavatar={ImgAvatarMulher} onContadorChange={handleContadorChange}/>
                </div>
                <img className="imgreload" src={ImgRelaod} onClick={clickReload}/>
            </div>

            <Link to="/">Retornar para a pagina principal</Link>;
        </>
    );
}
