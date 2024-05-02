import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Atv01 from "./components/Atv01";
/* import Atv02 from ""; */

export default function MinhasRotas(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Atv01" element={<Atv01 />} />
        </Routes>
        </BrowserRouter>
    );
}