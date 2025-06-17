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
                            <input type="text" name='search' id='search' className="w-full p-3 rounded-lg border border-primary focus:outline-none focus:border-white transition-all ease-in-out" placeholder="Busque seu restaurante" />
                        </fieldset>
                    </form>
                </div>

                <div>
                    <nav className=" w-full flex gap-4">
                        <button>

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
