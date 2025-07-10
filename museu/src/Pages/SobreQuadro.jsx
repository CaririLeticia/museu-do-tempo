import React from "react";
import { useParams } from "react-router-dom";
import obras from "../database/quadros.json";
function SobreQuadro() {
  const { id } = useParams();

//   const obras =[ {
//     id:1,
//     nome: "Cristo no Deserto",
//     artista: "Ivan Kramskoy",
//     descricao: `Pintado em 1872, este quadro retrata Jesus em meditação profunda no deserto. Com tons sóbrios e expressão introspectiva, a obra transmite silêncio, solidão e força espiritual.`,
//     imagem: "https://4.bp.blogspot.com/-bbTPmq-hMBc/TyaJJLjcloI/AAAAAAAAAK0/ZFr2Q9TKLp0/s1600/B(2012)+11+v+domingo+tc,+Cristo+no+deserto,+Kramskoy,+1872,+%C3%B3leo+sobre+tela,+180+x+210+cm+Tretyakov+Gallery,+Moscou,+R%C3%BAssia.jpg"
//   }];
  const obra = obras.find((q) => q.id.toString() === id);

  if(!obra) {
    <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="font-semibold">Obra não encontrada</p>
    </div>
  }
  return (
    <section className="w-full bg-gradient-to-br from-purple-950 via-indigo-900 to-black text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">{obra.nome}</h1>
      <p className="italic text-purple-300 mb-2">Artista: {obra.artista}</p>
      <img
        src={obra.imagem}
        alt={obra.nome}
        className="max-w-md rounded-2xl shadow-2xl mb-6"
      />
      <p className="max-w-xl text-lg text-justify selection:text-amber-200">{obra.descricao}</p>
    </section>
  );
}

export default SobreQuadro;