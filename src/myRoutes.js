import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Atv01 from "./components/Atv01";
import Atv02 from "./components/contador";
import Atv03 from "./components/Atv03/Atv03";
/* import Atv02 from ""; */

export default function MinhasRotas(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Atv01" element={<Atv01 />} />
            <Route path="/Atv02" element={<Atv02 />} />
            <Route path="/Atv03" element={<Atv03 />} />
        </Routes>
        </BrowserRouter>
    );
}