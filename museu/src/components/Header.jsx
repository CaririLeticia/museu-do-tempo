import logo from "../assets/museuLogo.png"
export const Header = () => {
const URlCategories = "/quadros/categoria/";
    return(
        <>
        {/* TODO: trocar imagem da logo */}
            <header>
                <div class="header-content">
                <div class="logo">
                    <a className="flex gap-2" href="/">
                    <img src={logo} alt="museu do tempo logo" />
                    <span>MUSEU DO TEMPO</span>
                    </a>
                </div>
                <nav>
                    <ul>
                    <li><a href="/">Início</a></li>
                    <li class="dropdown">
                        <a href="#">Exposições ▾</a>
                        <ul class="dropdown-menu">
                        <li><a href="/quadros">Quadros</a></li>
                        <li><a href={URlCategories + "era antiga"}>Era Antiga</a></li>
                        <li><a href={URlCategories + "era medieval"}>Era Medieval</a></li>
                        <li><a href={URlCategories + "revolucao industrial"}>Revolução Industrial</a></li>
                        <li><a href={URlCategories + "futuro"}>Futuro Imaginado</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Linha do Tempo</a></li>
                    <li><a href="/Cadastro">Login</a></li>
                    </ul>
                </nav>
                </div>
             </header>
        </>
    )
}