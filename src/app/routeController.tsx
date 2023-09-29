import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewHome from "../view/viewHome";
import ViewListPacient from "../view/viewListPacient";
import ViewCadPacient from "../view/viewCadPacient";
import ViewNotFound from "../view/viewNotFound";

const RouteController = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/detalhes/:id" Component={Details} /> */}
        <Route path="/cadastro" Component={ViewCadPacient} />
        <Route path="/pacientes" Component={ViewListPacient} />
        <Route path="/" Component={ViewHome} />
        <Route path="*" Component={ViewNotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteController;
