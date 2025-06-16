import { Footer } from "../../components/Footer";

export const HomePage = () => {
    return (

        <header>
            <div className="container">
                <div className="header-logo">
                    <img src="./img/logonova.png" alt="Sabores da ferrovia" width={200} height={200} className="object-contain" />
                </div>
                <div className="header-pesquisa">
                    <nav className="search-bar">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Busque seu restaurante" className="search-input" />
                    </nav>

                    <nav className="list-nav">
                        <ul>
                            <li>
                                <a href="#"><img src="./img/casinha.png" alt="" /></a>
                            </li>
                            <li>
                                <img src="./img/coração.png" alt="" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
