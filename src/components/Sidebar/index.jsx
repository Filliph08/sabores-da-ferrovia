export const Sidebar = () => {
    return (
        <div className="w-full bg-primary min-h-screen max-w-64">
            <div className="header-logo">
                <img src="./img/logonova.png" alt="Sabores da ferrovia" width={400} height={400} className="object-contain" />
            </div>
            <div class="flex flex-col space-y-4 font-bold">
                <p class="text-xl text-white justify-center flex">RESTAURANTE</p>
                <p class="text-xl text-white justify-center flex">CAFETERIA</p>
                <p class="text-xl text-white justify-center flex">DOCERIA</p>
                <p class="text-xl text-white justify-center flex">BARES</p>
                <p class="text-xl text-white justify-center flex">PADARIAS</p>
            </div>
        </div>
    )
}