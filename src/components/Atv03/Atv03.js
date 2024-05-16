import { Link } from "react-router-dom";
import Gallery from "./components/profile";
import TodosList from "./components/todolist";
import Todolistcomchaves from "./components/Jscomchaves";
import Profileprop from "./components/props";
import Listaembalo from "./components/renderizacaocond";
import Listarend from "./components/listarend";
import  Cafegathering from "./components/componentpuro";
import "./Atv03style.css"
export default function Atv03() {
    return (
        <>
            <Gallery />
            <TodosList />
            <Todolistcomchaves />
            <Profileprop />
            <Listaembalo />
            <Listarend />
            <Cafegathering />

            <Link to="/">Retornar para a pagina principal</Link>

        </>
    )
};