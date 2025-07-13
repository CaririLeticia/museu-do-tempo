import React, { useEffect, useState } from "react";

export const EraMedieval = () => {
  const [obras, setObras] = useState([]);

  useEffect(() => {
    const apiKey = "7a7046ff-8360-4747-b143-dd4d941543a0"; // Coloque sua chave aqui direto pra testar
    const buscarObras = async () => {
      try {
        const response = await fetch(
          `https://api.harvardartmuseums.org/object?apikey=${apiKey}&q=medieval&classification=Paintings&size=50`
        );
        const data = await response.json();

        // Usa direto data.records da API Harvard
        const obrasFiltradas = data.records
          .filter((record) => {
            const dataTexto = record.dated;
            if (!dataTexto) return false;

            // Pegar números de dentro da string, como 1200, 13, etc.
            const matchAno = dataTexto.match(/\d{3,4}/);
            if (!matchAno) return false;

            const ano = parseInt(matchAno[0]);

            return ano >= 476 && ano <= 1453;
          })
          .map((record) => ({
            id: record.id,
            titulo: record.title,
            imagem: record.primaryimageurl,
            ano: record.dated || "Ano não informado",
          }));

        setObras(obrasFiltradas);
      } catch (erro) {
        console.error("Erro ao buscar obras:", erro);
      }
    };

    buscarObras();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Obras da Era Medieval
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {obras.map((obra) => (
          <div
            key={obra.id}
            className="border rounded p-2 shadow-md bg-white text-center"
          >
            <img
              src={obra.imagem}
              alt={obra.titulo}
              className="w-full h-64 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">{obra.titulo}</h2>
            <p className="text-gray-600">Ano: {obra.ano}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
