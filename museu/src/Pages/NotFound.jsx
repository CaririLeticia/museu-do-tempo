export const NotFound = () => {
    return(
        <>
            <div className="text-center mt-20">
                <h2 className="text-4xl font-semibold">404 – Quadro não encontrado</h2>
                <p className="text-lg m-2">Parece que esse quadro escapou da moldura 🖼️</p>
                <a href="/"
                className="underline text-blue-400 hover:text-blue-500"
                >Voltar para o início</a>
            </div>    
        </>
    )
}