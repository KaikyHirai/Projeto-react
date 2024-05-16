import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <h1>Pagina principal</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Atividade 1</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Atividade 2</Link>
                    </li>
                    <li>
                        <Link to="/Atv03">Atividade 3</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
