import { Footer } from "../../components/Footer";

export const CadastroPage = () => {
    return (
        <main className="w-full flex items-center justify-center min-h-screen bg-primary ">
            <div className="w-full max-w-xs bg-neutral-50 p-20">
                <div class="flex flex-row space-y-4 font-bold"></div>
                <h1 class="text-xl text-primary justify-center flex">Cadastro</h1>

                <form >
                <p>Digite seu email:</p>
                <input type="text" placeholder="Email..." />

                <p>Crie uma senha:</p>
                <input type="password" placeholder="Senha..." />
                </form>
            
            </div>
        </main>



    );
}
