export const CadastroExposicao = () => {
  return (
    <>
      <section
        id="section-container"
        className="flex flex-col justify-center items-center w-full h-screen p-4"
      >
        <h2 id="section__title" className="text-3xl text-amber-400 mb-6">
          Cadastrar Nova Exposição
        </h2>

        <form
          id="form__cadastro"
          className="w-full max-w-lg border border-amber-300 rounded-2xl text-center p-8 bg-white/10 backdrop-blur-md"
        >
          <div className="mb-6">
            <input
              id="nome__quadro"
              className="w-full border p-2 text-lg rounded-2xl focus:border-amber-300 outline-none"
              type="text"
              placeholder="Nome do Quadro"
              required
            />
          </div>

          <div className="mb-6">
            <input
              id="categoria"
              className="w-full border p-2 text-lg rounded-2xl focus:border-amber-300 outline-none"
              type="text"
              placeholder="Categoria"
              required
            />
          </div>

          <div className="mb-6">
            <input
              id="img__url"
              className="w-full border p-2 text-lg rounded-2xl focus:border-amber-300 outline-none"
              type="text"
              placeholder="URL da Imagem"
              required
            />
          </div>

          <button
            id="cadastrar__btn"
            className="bg-amber-300 cursor-pointer hover:bg-amber-400 text-black font-bold py-3 px-8 text-lg rounded-full transition-colors"
          >Cadastrar</button>
        </form>
      </section>
    </>
  );
};
