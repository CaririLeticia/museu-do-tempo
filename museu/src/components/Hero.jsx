import { useEffect, useState } from "react";

export const Hero = () => {
  const data = [
    {
      id: 1,
      url: "https://media.gazetadopovo.com.br/2022/08/29163701/platao-aristoteles-escola-de-atenas-recorte-960x540.jpg",
      alt: "A aventura do grande debate",
    },
    {
      id: 2,
      url: "https://tse1.mm.bing.net/th/id/OIP.CXMNSE4rlrEy439vk0N-hwHaE3?rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Sócrates",
    },
    {
      id: 3,
      url: "https://th.bing.com/th/id/R.94ef3a9d3b0b8795f5e268bf899941fa?rik=%2bfLTi0YMma7rxw&riu=http%3a%2f%2fwww.dionisioarte.com.br%2fwp-content%2fuploads%2f2016%2f07%2flivro-dos-mortos-arte-egipcia-antigo-egito-pinturas-2-1.jpg&ehk=ttIqfh4ggoJYHd41ckI1%2fx7m4H6fjEnKwDjUoTPUWKw%3d&risl=&pid=ImgRaw&r=0",
      alt: "Grécia Antiga",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);
    return () => clearInterval(id);
  }, [data.length]);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0,0,0,0.5)), url(${data[index].url})`,
        backgroundPosition: "center",
      }}
    >
      <h1>{data[index].alt}</h1>
    </section>
  );
};
