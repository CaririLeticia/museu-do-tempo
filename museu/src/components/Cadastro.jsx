import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const Cadastro = () => {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [errMsg, setErrMsg] = useState();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target();
        if (name === "nome") setNome(value);
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
        if (name === "confirmPassword") setConfirmPassword(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!nome || !email || !password ||confirmPassword) {
            setErrMsg("Preencha todos os campos");
        } else if (password != confirmPassword) {
            setErrMsg("As senhas não são iguais");
        }
    }
    return(
        <>
            <section className="flex">
                <div className="flex flex-col justify-center w-1/3 border-1 border-gray-100">
                    <h1 className="text-4xl text-amber-300 text-center hover:text-amber-400">Cadastro</h1>   
                    <form 
                    onSubmit={handleChange}
                    className="flex flex-col p-2">
                            <div className="p-2 flex justify-center">
                                <input
                                value={nome}
                                required
                                className="w-11/12 p-2 hover:border-gray-50 focus:border-amber-300 focus:ring-1 focus:ring-amber-200 outline-none rounded-2xl transition-all duration-300 ease-in-out" type="text" placeholder="Name"/>
                            </div>
                            <div className="p-2 flex justify-center">
                                <input
                                value={email}
                                required
                                className="w-11/12 p-2  focus:border-amber-300 focus:ring-1 focus:ring-amber-200 outline-none rounded-2xl transition-all duration-300 ease-in-out" type="text" placeholder="Email"/>
                            </div>
                            <div className="p-2 flex justify-center">
                                <input
                                value={password}
                                required
                                className="w-11/12 p-2  focus:border-amber-300 focus:ring-1 focus:ring-amber-200 outline-none rounded-2xl transition-all duration-300 ease-in-out" type="text" placeholder="password"/>
                            </div>
                            <div className="p-2 flex justify-center">
                                <input
                                value={confirmPassword}
                                required
                                className="w-11/12 p-2  focus:border-amber-300 focus:ring-1 focus:ring-amber-200 outline-none rounded-2xl transition-all duration-300 ease-in-out" type="text" placeholder="confirm password"/>
                            </div>
                            <button 
                            className="text-center text-cyan-900 hover:text-cyan-950"
                            onClick={navigate("/login")}
                            >Já tem conta? Fazer Login</button>
                            <button className="bg-purple-900 hover:bg-purple-950 w-2/4 m-auto rounded-2xl p-2 mt-4 cursor-pointer">cadastrar</button>

                            {errMsg && <p className="text-red-500 text-center">{errMsg}</p>}
                    </form>
                </div>
                <div className="w-4/6">
                    <img src="https://i0.wp.com/obarrete.com/wp-content/uploads/2020/11/the-death-of-socrates.png?w=1200&ssl=1" alt="" />
                </div>
            </section>
        </>
    )
}