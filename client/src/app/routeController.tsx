import ViewCadPacient from '../views/viewCadPacient';
import ViewHome from '../views/viewHome';
import ViewListPacient from '../views/viewListPacient';
import ViewNotFound from '../views/viewNotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
