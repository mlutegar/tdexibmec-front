import React from "react";
import {createRoot} from "react-dom/client";
import Home from "./pages/Home";
import {HashRouter, Route, Routes} from "react-router-dom";
import Cronograma from "./pages/Cronograma";
import Palestrante from "./pages/Palestrante";
import Ranking from "./pages/Ranking";
import {PontuacaoProvider} from "./context/PontuacaoProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <HashRouter>
            <PontuacaoProvider>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cronograma" element={<Cronograma/>}/>
                    <Route path="/palestrante" element={<Palestrante/>}/>
                    <Route path="/ranking" element={<Ranking/>}/>
                </Routes>
            </PontuacaoProvider>
        </HashRouter>
    </React.StrictMode>
);
