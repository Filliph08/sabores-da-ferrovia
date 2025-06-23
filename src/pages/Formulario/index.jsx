
export const FormularioPage = () => {
    return (
        <main className="w-full flex items-center justify-center min-h-screen" style={{backgroundImage: "linear-gradient(to right, #721424, #833b47)"}}>
            <div className="w-full max-w-xs bg-neutral-50 p-20 rounded-xl shadow-lg flex flex-col items-center">
                <div class="flex flex-row space-y-4 font-bold"></div>
                <h1 className="text-4xl text-primary justify-center flex mb-4">Login:</h1>

                <form>
                    <p>Digite seu email:</p>
                    <input className="border px-3 py-1 rounded" style={{ borderColor: "#721424" }} type="text" placeholder="Email..." />

                    <p>Utilize sua senha:</p>
                    <input className="border px-3 py-1 rounded" style={{ borderColor: "#721424" }} type="password" placeholder="Senha..." />

                    <button className="text-white px-6 py-3 text-lg rounded shadow hover:opacity-90 transition" style={{ backgroundColor: "#721424" }}>Continue</button>
                </form>
            </div>
        </main>
    );
}

