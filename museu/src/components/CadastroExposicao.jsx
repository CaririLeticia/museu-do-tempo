import { useState } from "react";

export const CadastroExposicao = () => {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [urlImg, setUrlImg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !categoria || !urlImg) {
      setErrMsg("Por favor, preencha todos os campos");
      return;
    }

    setErrMsg("");
    console.log("Exposição cadastrada:", { nome, categoria, urlImg });

    // Limpa os campos após o envio
    setNome("");
    setCategoria("");
    setUrlImg("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nome") setNome(value);
    if (name === "categoria") setCategoria(value);
    if (name === "urlImg") setUrlImg(value);
  };

  return (
    <section
      id="section-container"
      className="flex flex-col justify-center items-center w-full min-h-screen p-4"
    >
      <h2 id="section__title" className="text-3xl text-amber-400 mb-6">
        Cadastrar Nova Exposição
      </h2>

      <form
        onSubmit={handleSubmit}
        id="form__cadastro"
        className="w-full max-w-lg border border-amber-300 rounded-2xl text-center p-8 bg-white/10 backdrop-blur-md"
      >
        <div className="mb-6">
          <input
            name="nome"
            id="nome__quadro"
            className="w-full border p-2 text-lg rounded-2xl focus:border-amber-300 outline-none"
            type="text"
            placeholder="Nome do Quadro"
            required
            onChange={handleChange}
            value={nome}
          />
        </div>

        <div className="mb-6">
          <input
            name="categoria"
            id="categoria"
            className="w-full border p-2 text-lg rounded-2xl focus:border-amber-300 outline-none"
            type="text"
            placeholder="Categoria"
            required
            onChange={handleChange}
            value={categoria}
          />
        </div>

        <div className="mb-6">
          <input
            name="urlImg"
            id="img__url"
            className="w-full border p-2 text-lg rounded-2xl focus:border-amber-300 outline-none"
            type="text"
            placeholder="URL da Imagem"
            required
            onChange={handleChange}
            value={urlImg}
          />
        </div>

        <button
          type="submit"
          id="cadastrar__btn"
          className="bg-amber-300 cursor-pointer hover:bg-amber-400 text-black font-bold py-3 px-8 text-lg rounded-full transition-colors"
        >
          Cadastrar
        </button>

        {errMsg && (
          <p className="text-red-500 font-black p-2 mt-2">{errMsg}</p>
        )}
      </form>
    </section>
  );
};
