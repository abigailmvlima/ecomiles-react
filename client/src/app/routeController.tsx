import { EActiveView } from 'domains/enums/EActiveView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewCart from 'views/viewCart';
import ViewChallengeDetails from 'views/viewChallengeDetails';
import ViewChallenges from 'views/viewChallenges';
import ViewLogin from 'views/viewLogin';
import ViewRegister from 'views/viewRegister';
import {
  default as ViewAbout,
  default as ViewRewards,
} from 'views/viewRewards';
import ViewHome from '../views/viewHome';
import ViewNotFound from '../views/viewNotFound';

const RouteController = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/${EActiveView.about}`} Component={ViewAbout} />
        <Route path={`/${EActiveView.challenges}`} Component={ViewChallenges} />
        <Route
          path={`/${EActiveView.challengeDetails}`}
          Component={ViewChallengeDetails}
        />
        <Route path={`/${EActiveView.cart}`} Component={ViewCart} />
        <Route path={`/${EActiveView.rewards}`} Component={ViewRewards} />
        <Route path={`/${EActiveView.register}`} Component={ViewRegister} />
        <Route path={`/${EActiveView.home}`} Component={ViewHome} />
        <Route path={`/${EActiveView.login}`} Component={ViewLogin} />
        <Route path="*" Component={ViewNotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteController;
