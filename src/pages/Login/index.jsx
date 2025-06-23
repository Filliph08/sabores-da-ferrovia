
export const LoginPage = () => {
    return (
        <main className="w-full flex items-center justify-center min-h-screen" style={{backgroundImage: "linear-gradient(to right, #721424,#b65555)"}}>
            <div className="w-full max-w-xs bg-neutral-50 p-20 rounded-xl shadow-lg flex flex-col items-center">
                <div class="flex flex-row space-y-4 font-bold"></div>
                <h1 className="text-4xl text-primary justify-center flex mb-4">Login:</h1>

                <form className="flex flex-col gap-4">
                    <fieldset>
                        <label>Digite seu email:</label>
                        <input className="border px-3 py-1 rounded border-[#721424]" type="text" placeholder="Email..." />
                    </fieldset>

                    <fieldset>
                        <label>Utilize sua senha:</label>
                        <input className="border px-3 py-1 rounded border-[#721424]" type="password" placeholder="Senha..." />
                    </fieldset>

                    <button className="text-white px-6 py-3 text-lg rounded shadow hover:opacity-90 transition bg-[#721424]">Continue</button>
                    
                </form>
            </div>
        </main>
    );
}

