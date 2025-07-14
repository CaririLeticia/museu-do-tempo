import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
export const CadastroExposicao = () => {
  const [nome, setNome] = useState();
  const [categoria, setCategoria] = useState();
  const [urlImg, setUrlImg] = useState();
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !categoria || !urlImg){
      setErrMsg("Por favor, preencha todos os campos");
      return
    }else {
        toast.success("Obra cadastrada com sucesso!");
        setErrMsg("");
        return
    }
    
  }
  // FIX ME 
  // const criarExposicao = async (url, dados) => {
  //   try{
  //     const resposta = await fetch(url ,{
  //       method:"POST",
  //       headers: {
  //         "Content-Type": "Application/json"
  //       },
  //       body: JSON.stringify(dados)
  //     })
  //     const retorno = await resposta.json();
  //   } catch(err) {
  //     console.error(err);
  //     setErrMsg("Não foi possível criar exposição")
  //   }
  // }

  const handleChange = (e) => {
    const { value } = e.value.target;
    if (value === "nome") setNome(value);
    if (value === "categoria") setCategoria(value);
    if (value === "url") setUrlImg(value)
  }
  return (
    <>
      <section
        id="section-container"
        className="flex flex-col justify-center items-center w-full h-screen p-4"
      >
        <h2 id="section__title" className="text-3xl text-amber-400 mb-6">Cadastrar Nova Exposição</h2>

        <form
        onSubmit={() => handleSubmit}
          id="form__cadastro"
          className="w-full max-w-lg border border-amber-300 rounded-2xl text-center p-8 bg-white/10 backdrop-blur-md">
          <div className="mb-6">
            <input
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
            id="cadastrar__btn"
            className="bg-amber-300 cursor-pointer hover:bg-amber-400 text-black font-bold py-3 px-8 text-lg rounded-full transition-colors">Cadastrar</button>
          {errMsg && (
            <p className="text-red-500 font-black p-2">{errMsg}</p>
          )}
        </form>
      </section>
      <ToastContainer
      draggable
      pauseOnHover
      position="top-right"
      theme="colored"
      autoClose={3000}
      closeOnClick
      hideProgressBar={false}
      />
    </>
  );
};
