import { Footer } from "../../components/Footer";

export const HomePage = () => {
    return (

        <header>
            <div className="container">
                <div className="header-logo">
                    <img src="./img/logonova.png" alt="Sabores da ferrovia" width={200} height={200} className="object-contain" />
                </div>

                <div className="w-full p-4">
                    <form>
                        <fieldset className="w-full max-w-lg">
                            
                            <input type="text" name='search' id='search' className="w-full p-3 rounded-lg border border-primary focus:outline-none focus:border-white transition-all ease-in-out" placeholder="Busque seu restaurante"/>
                        </fieldset>
                    </form>
                </div>

                <div>
                    <nav className="list-nav">
                        <ul>
                            <li>
                                <a href="#"><img src="./img/casinha.png" alt="" /></a>
                            </li>
                            <li>
                                <img src="./img/coração.png" alt="favoritos" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
