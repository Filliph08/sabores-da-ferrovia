import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { CadastroPage } from "./pages/Cadastro";
import { FormularioPage } from "./pages/Formulario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cadastro' element={<CadastroPage />} />
        <Route path='/formulario' element={<FormularioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;