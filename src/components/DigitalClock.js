import React, { useState, useEffect } from "react";

export function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const IDintervalo = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(IDintervalo);
        };
    }, []);

    function formatarHora(){
        let hora = time.getHours();
        const minutos = time.getMinutes();
        const segundos = time.getSeconds();
        
        return `${padZero(hora)}:${padZero(minutos)}:${padZero(segundos)}`;
    }
    
    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className="container-relogio">
            <div className="relogio">
                <span>{formatarHora()}</span>
            </div>
        </div>
    );
}
