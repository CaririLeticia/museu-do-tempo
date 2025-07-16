import React, { useEffect, useState } from "react";

export const RevolucaoIndustrial = () => {
  const [obras, setObras] = useState([]);

  useEffect(() => {
    const apiKey = "7a7046ff-8360-4747-b143-dd4d941543a0";

    const buscarObras = async () => {
      try {
        console.log("useEffect rodando...");
        const response = await fetch(
          `https://api.harvardartmuseums.org/object?apikey=${apiKey}&q=industrial&classification=Paintings&size=50`
        );
        const data = await response.json();

        console.log("Objectinfo:", data);
        console.log("Registros da API:", data.records);

        const obrasFiltradas = data.records
          .filter((record) => record.primaryimageurl) 
          .map((record) => ({
            id: record.id,
            titulo: record.title,
            imagem: record.primaryimageurl,
            ano: record.dated || "Ano não informado",
          }));

        console.log("Obras filtradas:", obrasFiltradas);
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
        Obras da Revoluçao Industrial
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {obras.map((obra) => (
          <div
            key={obra.id}
            className="max-w-sm m-2 bg-white/10 backdrop-blur-md shadow-lg border shadow-purple-950 border-white/20 hover:bg-white/5 hover:border-white/30 transition duration-300 ease-in-out"
          >
            <img
              src={obra.imagem}
              alt={obra.titulo}
              className="w-full h-64 object-cover mb-2 transition-transform duration-300 hover:scale-105"
            />
            <h2 className="text-lg font-semibold">{obra.titulo}</h2>
            <p className="text-white">Ano: {obra.ano}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
