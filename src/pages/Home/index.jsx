import { Footer } from "../../components/Footer";

export const HomePage = () => {
    return (
        <div className="flex flex-col justify-between h-screen">
            <div>
                <img src="./img/logo.png" alt="Sabores da ferrovia" width={200} height={200} className="object-contain" />
                <div class="flex items-center">
                </div>
            </div>
            <Footer />
        </div>
    );
}
