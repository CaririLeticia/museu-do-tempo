import { Link } from "react-router-dom";

function Card ({nome, imagem, artista, descricao, id}) {
  return (
   <>
    <section className='max-w-sm bg-white/10 backdrop-blur-md shadow-lg border shadow-purple-950 border-white/20 hover:bg-white/5 hover:border-white/30 transition duration-300 ease-in-out'>
        <Link to={`quadro/${id}`}>
            <div className='transform-gpu hover:scale-105 transition duration-500'>
                <img 
                className='w-11/12 m-auto rounded-2xl p-1'
                 src={imagem}
                 alt={nome}
                  />
            </div>
            <div className='w-full p-2'> 
                <h2 className='text-2xl font-semibold p-1 selection:text-amber-200'>{nome}</h2>
                <p className='line-clamp-2 p-1 selection:text-amber-200'>{descricao}</p>
            </div>
        </Link>
    </section>
   </>
  );
}
export default Card;