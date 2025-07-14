// import { logo } from "../assets/museuLogo.png"
export const Header = () => {
    return(
        <>
        {/* TODO: trocar imagem da logo */}
            <header>
                <div class="header-content">
                <div class="logo">
                    <img src="" alt="museu do tempo logo" />
                    <span>MUSEU DO TEMPO</span>
                </div>
                <nav>
                    <ul>
                    <li><a href="#">Início</a></li>
                    <li class="dropdown">
                        <a href="#">Exposições ▾</a>
                        <ul class="dropdown-menu">
                        <li><a href="eraAntiga.html">Era Antiga</a></li>
                        <li><a href="#">Era Medieval</a></li>
                        <li><a href="#">Revolução Industrial</a></li>
                        <li><a href="#">Futuro Imaginado</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Linha do Tempo</a></li>
                    <li><a href="#">Sobre</a></li>
                    </ul>
                </nav>
                </div>
             </header>
        </>
    )
}