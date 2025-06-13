import { Footer } from "../../components/Footer";

export const LoginPage = () => {
    return (
        <div className="flex flex-col justify-between h-screen">
            <div>
                <img src="./img/logo.png" alt="Sabores da ferrovia" width={200} height={200} className="object-contain" />
                <div class="flex items-center">
                    <h1 className="text-5xl font-extrabold">Palmeiras não tem mundial</h1>
                </div>
            </div>

            <Footer />
        </div>
    );
}
