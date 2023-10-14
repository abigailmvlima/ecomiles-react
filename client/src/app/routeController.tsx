import { EActiveView } from 'domains/enums/EActiveView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAbout from 'views/viewAbout';
import ViewHobbies from 'views/viewHobbies';
import ViewTraining from 'views/viewTraining';
import ViewHome from '../views/viewHome';
import ViewNotFound from '../views/viewNotFound';
import ViewExperience from 'views/viewExperience';

const RouteController = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/detalhes/:id" Component={Details} /> */}
        <Route path={`/${EActiveView.about}`} Component={ViewAbout} />
        <Route path={`/${EActiveView.trainning}`} Component={ViewTraining} />
        <Route path={`/${EActiveView.experience}`} Component={ViewExperience} />
        <Route path={`/${EActiveView.hobbies}`} Component={ViewHobbies} />

        <Route path="/" Component={ViewHome} />
        <Route path="*" Component={ViewNotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteController;
