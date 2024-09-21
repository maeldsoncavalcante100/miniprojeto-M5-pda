import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Indicacoes from "./Pages/Indicacoes";
import Contatos from "./Pages/Contatos";
import Page404 from "./Pages/Page404";
import PageBase from "./Pages/PageBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/indicacoes" element={<Indicacoes />}></Route>
          <Route path="/contatos" element={<Contatos />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
