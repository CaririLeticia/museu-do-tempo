export const Footer = () => {
  const perfil = [
    { nome: "Leticia", github: "https://github.com/" },
    { nome: "Caio", github: "https://github.com/" },
    { nome: "marley", github: "https://github.com/" },
    { nome: "Pablo", github: "https://github.com/stevopablo/" },
  ];

  return (
    <>
      <footer id="footer-container" className="p-7">
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
                    rel="noreferrer"
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
      </footer>
    </>
  );
};
