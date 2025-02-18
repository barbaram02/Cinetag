import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes(){
    return(
        <BrowserRouter> {/*rowserRouter é responsável por informar a nossa aplicação que teremos um roteamento de componentes a seguir*/}
            <Routes>{/* Routes é o próprio roteador*/}
                <Route path="/" element={<PaginaBase/>}> {/*Essa rota é a rota pai, responsável por colocar o / antes do resto das rotas filho*/}
                <Route index element={<Inicio/>}></Route>{/*Route é a rota em específico.*/}
                <Route path="favoritos" element={<Favoritos/>}></Route>
                <Route path=":id" element={<Player/>}></Route>
                <Route path="*" element={<NaoEncontrada/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;