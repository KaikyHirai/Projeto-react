import { DigitalClock } from "./DigitalClock";
import EfeitoDigitar from "./Letreiro"
import { Link } from "react-router-dom";
export default function Atv01(){
    return(
        <>
            <h1>Atividade 01</h1>
            <DigitalClock />
            <EfeitoDigitar />
            <br/>
            <Link to="/">Retornar para a pagina principal</Link>

        </>
    );
}