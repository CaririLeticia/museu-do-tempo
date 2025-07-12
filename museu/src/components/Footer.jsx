export const Footer = () => {
  const perfil = [
    { nome: "Leticia", github: "https://www.youtube.com/" },
    { nome: "Caio", github: "https://www.youtube.com/" },

    { nome: "Pablo", github: "https://github.com/stevopablo/" },

    { nome: "Jorge", github: "https://www.youtube.com/" },
    { nome: "Pablo", github: "https://www.youtube.com/" },
  ];

  return (
    <>
      <section id="footer-container" className="absolute bottom-2 p-2 w-full">
        <h2 className="text-center text-amber-300 font-bold text-2xl pb-3">
          Equipe:
        </h2>
        <div className="w-full flex justify-center">
          {perfil.length > 0 ? (
            <ul className="flex flex-wrap justify-center gap-12">
              {perfil.map((pessoa, index) => (
                <li key={index} id="footer__perfil" className="rounded-2xl p-2">
                  <a
                    href={pessoa.github}
                    className="text-white"
                    target="_blank"
                  >
                    {pessoa.nome}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white">Carregando...</p>
          )}
        </div>
      </section>
    </>
  );
};
