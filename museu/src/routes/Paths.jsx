import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../Pages/Home";
import { Footer } from "../components/Footer";
import { Cadastro } from "../components/Cadastro";
export const Paths = () => {
    return(
        <>
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
        </>
    )
}