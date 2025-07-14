import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Login = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email) {
      setErrMsg("Preencha todos os campos");
    } else {
      setErrMsg("");
      console.log(`User: ${JSON.stringify({ nome, email })}`);
      toast.success("Login realizado com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 2000)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nome") setNome(value);
    if (name === "email") setEmail(value);
  };

  return (
    <>
      <section className="flex">
        <div className="flex flex-col justify-center w-1/3 border-1 border-gray-100">
          <h1 className="text-4xl text-amber-300 text-center hover:text-amber-400">Login</h1>
          <form onSubmit={handleSubmit} className="flex flex-col p-2">
            <div className="p-2 flex justify-center">
              <input
                name="nome"
                value={nome}
                onChange={handleChange}
                required
                className="w-11/12 p-2 focus:border-amber-300 focus:ring-1 focus:ring-amber-200 outline-none rounded-2xl transition-all duration-300 ease-in-out"
                type="text"
                placeholder="Nome"
              />
            </div>
            <div className="p-2 flex justify-center">
              <input
                name="email"
                value={email}
                onChange={handleChange}
                required
                className="w-11/12 p-2 focus:border-amber-300 focus:ring-1 focus:ring-amber-200 outline-none rounded-2xl transition-all duration-300 ease-in-out"
                type="email"
                placeholder="Email"
              />
            </div>
            <button className="bg-purple-900 hover:bg-purple-950 w-2/4 m-auto rounded-2xl p-2 mt-4 cursor-pointer">Fazer login</button>
            {errMsg && <p className="text-red-800 font-semibold text-center mt-2">{errMsg}</p>}
          </form>
          <button
            onClick={() => navigate("/cadastro")}
            className="text-center text-cyan-900 hover:text-cyan-950 cursor-pointer mt-2"
          >
            Não tem conta? Criar
          </button>
        </div>
        <div className="w-4/6">
          <img
            src={props.img || "https://static.todamateria.com.br/upload/ch/eg/chegada-dos-portugueses-ao-brasil-og.jpg"}
            alt="Ilustração de fundo"
          />
        </div>
      </section>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      theme="colored"
      />
    </>
  );
};
