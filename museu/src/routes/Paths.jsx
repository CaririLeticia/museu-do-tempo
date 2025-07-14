import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../Pages/Home";
import { Footer } from "../components/Footer";
import { Cadastro } from "../components/Cadastro";
import { Login } from "../components/Login";
import SobreQuadro from "../Pages/SobreQuadro";
import { Quadros } from "../Pages/Quadros";
import FiltroPorCategoria from "../Pages/FiltroPorCategoria";
import { NotFound } from "../Pages/NotFound";
import { CadastroExposicao } from "../components/CadastroExposicao";
export const Paths = () => {
    return(
        <>
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                    <Route path="/exposicao" element={<CadastroExposicao/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/quadros/obra/:id" element={<SobreQuadro/>}/>
                    <Route path="/quadros/categoria/:categoria" element={<FiltroPorCategoria/>}/>
                    <Route path="/quadros" element={<Quadros/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
        </>
    )
}