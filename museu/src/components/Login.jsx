import { useNavigate } from "react-router-dom";
export const Login = (props) => {
    const navigate = useNavigate();

    const handleCadastro = () => {
        navigate("/cadastro")
    }
    return(
        <>
            <section className="flex">
                <div className="flex flex-col justify-center w-1/3 border-1 border-gray-100">
                    <h1 className="text-4xl text-amber-300 text-center hover:text-amber-400">Login</h1>   
                    <form className="flex flex-col p-2">
                            <div className="p-2 flex justify-center">
                                <input className="w-11/12 p-2 hover:border-gray-50 focus:border-amber-300 focus:ring-1 focus:ring-amber-200 outline-none rounded-2xl transition-all duration-300 ease-in-out" type="text" placeholder="Name"/>
                            </div>
                            <div className="p-2 flex justify-center">
                                <input className="w-11/12 p-2  focus:border-amber-300 focus:ring-1 focus:ring-amber-200 outline-none rounded-2xl transition-all duration-300 ease-in-out" type="text" placeholder="Email"/>
                            </div>
                            <div className="p-2 flex justify-center">
                                <input className="w-11/12 p-2  focus:border-amber-300 focus:ring-1 focus:ring-amber-200 outline-none rounded-2xl transition-all duration-300 ease-in-out" type="text" placeholder="password"/>
                            </div>
                            <div className="p-2 flex justify-center">
                                <input className="w-11/12 p-2  focus:border-amber-300 focus:ring-1 focus:ring-amber-200 outline-none rounded-2xl transition-all duration-300 ease-in-out" type="text" placeholder="confirm password"/>
                            </div>
                            <p className="text-center text-cyan-900 hover:text-cyan-950">Não tem Conta? <span className="underline hover:text-cyan-700" onClick={handleCadastro}>Criar</span></p>
                            <button className="bg-purple-900 hover:bg-purple-950 w-2/4 m-auto rounded-2xl p-2 mt-4 cursor-pointer ">cadastrar</button>
                    </form>
                </div>
                <div className="w-4/6">
                    <img src={props.img || `https://www.holofotenoticias.com.br/wp-content/uploads/2022/04/Descobrimento.png`} alt="" />
                </div>
            </section>
        </>
    )
}