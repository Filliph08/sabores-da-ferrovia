
export const LoginPage = () => {
    return (
        <main className="w-full flex items-center justify-center min-h-screen bg-primary">
        
            <div className="w-full max-w-xs bg-neutral-50 p-5">
                <div class="flex flex-row space-y-4 font-bold"></div>
                <h1 class="text-xl text-primary justify-center flex">Login</h1>

                <form >
                <p>Digite seu e-mail</p>
                <input type="text" placeholder="E-mail"/>

                <p>Digite sua senha</p>
                <input type="password" placeholder="Senha"/>
                </form>
                
            </div>
        </main>
    );
}

