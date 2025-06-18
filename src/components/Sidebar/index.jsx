export const Sidebar = () => {
    return (
        <div className="w-full bg-primary min-h-screen max-w-64">
            <div className="header-logo">
                <img src="./img/logonova.png" alt="Sabores da ferrovia" width={200} height={200} className="object-contain" />
            </div>
            <div class="flex flex-col space-y-4 font-bold">
                <p class=" text-white hover:text-gray-500 transition duration-100 ease-in-out cursor-pointer text-xl justify-center flex">RESTAURANTE</p>
                <p class=" text-white hover:text-gray-500 transition duration-100 ease-in-out cursor-pointer text-xl justify-center flex">CAFETERIA</p>
                <p class=" text-white hover:text-gray-500 transition duration-100 ease-in-out cursor-pointer text-xl justify-center flex">DOCERIA</p>
                <p class=" text-white hover:text-gray-500 transition duration-100 ease-in-out cursor-pointer text-xl justify-center flex">BARES</p>
                <p class=" text-white hover:text-gray-500 transition duration-100 ease-in-out cursor-pointer text-xl justify-center flex">PADARIAS</p>
            </div>
        </div>
    )
}