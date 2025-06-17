import { Footer } from "../../components/Footer";

export const HomePage = () => {
    return (

        <header>
            <div className="container">
                <div className="header-logo">
                    <img src="./img/logonova.png" alt="Sabores da ferrovia" width={400} height={400} className="object-contain" />
                </div>
                <div className="w-full p-4">
                    <form>
                        <fieldset className="w-full max-w-lg">
                            <input type="text" name='search' id='search' className="w-full p-3 rounded-lg border border-primary focus:outline-none focus:border-white transition-all ease-in-out" placeholder="Busque seu restaurante" />
                        </fieldset>
                    </form>
                </div>
                <nav className=" w-50 flex items-center gap-4">
                    <button className="flex items-center justify-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                    <button className="flex items-center justify-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" /><circle cx="12" cy="10" r="3" /><circle cx="12" cy="12" r="10" /></svg>
                    </button>
                </nav>
            </div>
            <div className="container" color="purple" width={88} heigth={90}>
                
                
            </div>
        </header>
    );
}

