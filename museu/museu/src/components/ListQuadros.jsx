import Card from "./Card"

export const ListQuadros = ({ QuadrosArr }) => {
    return(
        <>
        <section>
            {QuadrosArr.length > 0 && (
                QuadrosArr.map((quadro, index) => (
                    <Card
                    id={quadro.id} 
                    artista={quadro.artista}
                    descricao={quadro.descricao}
                    imagem={quadro.imagem}
                    nome={quadro.nome}
                    key={index}
                    />
                ))
            )}
        </section>
        </>
    )
}