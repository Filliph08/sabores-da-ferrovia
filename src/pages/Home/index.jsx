import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export const HomePage = () => {
    return (
        <main className="w-full flex">
            <Sidebar />

            <div className="w-full">
                <Header />


                <div className="terraço">
                    <img src="./img/terraço.png" alt="Sabores da ferrovia" width={200} height={200} className="object-contain m-4 " />
                    <div class="flex flex-row font-bold">
                        <h1 class=" text-primary cursor-pointer text-xl flex">RESTAURANTE</h1>
                        <div />
                    </div>

                </div>
            </div>

        </main>
    );
}

