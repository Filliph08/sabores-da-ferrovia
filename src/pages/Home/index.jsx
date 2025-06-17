import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export const HomePage = () => {
    return (
        <main className="w-full">
            <Header />

            <div className="w-full flex ">
                <Sidebar />
            </div>
            <div className="container" color="purple" width={88} heigth={90}>
                
                
            </div>
        </main>
    );
}

