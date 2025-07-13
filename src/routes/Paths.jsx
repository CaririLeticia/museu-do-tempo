import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../Pages/Home";
import { Footer } from "../components/Footer";
import { Cadastro } from "../components/Cadastro";
import { Login } from "../components/Login";
import Card from "../components/Card";
import SobreQuadro from "../Pages/SobreQuadro";
import { Quadros } from "../Pages/Quadros";
import { EraMedieval } from "../Pages/EraMedieval";
import { RevolucaoIndustrial } from "../Pages/RevolucaoIndustrial";
export const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/EraMedieval" element={<EraMedieval />} />
          <Route
            path="/RevolucaoIndustrial"
            element={<RevolucaoIndustrial />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quadros/obra/:id" element={<SobreQuadro />} />
          <Route path="quadros/categoria/:categoria" />
          <Route path="/quadros" element={<Quadros />} />
          <Route path="/card" element={<Card />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
