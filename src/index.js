import React from "react";
import {createRoot} from "react-dom/client";
import Home from "./pages/Home";
import {HashRouter, Route, Routes} from "react-router-dom";
import Cronograma from "./pages/Cronograma";
import Palestrante from "./pages/Palestrante";
import Ranking from "./pages/Ranking";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cronograma" element={<Cronograma/>}/>
                <Route path="/palestrante" element={<Palestrante/>}/>
                <Route path="/ranking" element={<Ranking/>}/>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
