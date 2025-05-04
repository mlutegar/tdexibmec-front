import React from "react";
import {createRoot} from "react-dom/client";
import Home from "./pages/Home";
import {HashRouter, Route, Routes} from "react-router-dom";
import Cronograma from "./pages/Cronograma";
import Palestrante from "./pages/Palestrante";
import Ranking from "./pages/Ranking";
import {PontuacaoProvider} from "./context/PontuacaoProvider";
import EscolhaAvatar from "./pages/EscolhaAvatar";
import Perfil from "./pages/Perfil";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <HashRouter>
            <PontuacaoProvider>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/avatar" element={<EscolhaAvatar/>}/>
                    <Route path="/cronograma" element={<Cronograma/>}/>
                    <Route path="/palestrante" element={<Palestrante/>}/>
                    <Route path="/ranking" element={<Ranking/>}/>
                    <Route path="/perfil" element={<Perfil/>}/>
                </Routes>
            </PontuacaoProvider>
        </HashRouter>
    </React.StrictMode>
);
