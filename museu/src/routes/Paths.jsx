import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../Pages/Home";
import { Footer } from "../components/Footer";
import { Cadastro } from "../components/Cadastro";
import { Login } from "../components/Login";
import Card from "../components/Card";
import SobreQuadro from "../Pages/SobreQuadro";
export const Paths = () => {
    return(
        <>
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="quadro/:id" element={<SobreQuadro/>}/>
                    {/* <Route path="quadros/categoria/:categoria" /> */}
                    <Route path="/card" element={<Card/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
        </>
    )
}