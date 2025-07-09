import { useState } from "react";

// Importações das imagens
import eraAntiga from "../assets/eraAntiga.png";
import idadeMedia from "../assets/idadeMedia.png";
import revolucaoIndustrial from "../assets/revolucaoIndustrial.png";

export const Carrousel = () => {
  const data = [
    {
      titulo: "ERA ANTIGA",
      imagem: eraAntiga,
      texto:
        "A arte na Idade Antiga revela os primeiros registros da expressão humana através de formas visuais. Civilizações como Egito, Mesopotâmia, Grécia e Roma deixaram legados que vão muito além da estética.",
    },
    {
      titulo: "ERA MEDIEVAL",
      imagem: idadeMedia,
      texto:
        "A arte medieval reflete um período marcado pela forte influência da religião e pelo surgimento de estilos que buscavam expressar o espiritual e o divino.",
    },
    {
      titulo: "REVOLUÇÃO INDUSTRIAL",
      imagem: revolucaoIndustrial,
      texto:
        "Durante a Revolução Industrial, a arte refletiu as profundas mudanças sociais, econômicas e tecnológicas que transformaram o mundo.",
    },
  ];

  const [index, setIndex] = useState(0);

  const proximoItem = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const atual = data[index];

  return (
    <section className="carousel-container flex flex-col items-center text-center p-8">
      <h2 className="text-3xl font-bold text-amber-400 mb-4">{atual.titulo}</h2>

      <div className="w-full max-w-2xl mb-4">
        <img
          src={atual.imagem}
          alt={atual.titulo}
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>

      <p className="text-white text-lg mb-4">{atual.texto}</p>

      <button
        onClick={proximoItem}
        className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-6 rounded-full transition-colors"
      >
        Próximo
      </button>
    </section>
  );
};