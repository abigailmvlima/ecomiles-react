import 'fontsource-inter';
import 'fontsource-lato';
import 'fontsource-roboto';
import './index.css';
import RouteController from './routeController';

import * as S from './styles';

const App = () => {
  return (
    <S.Container>
      <RouteController />
    </S.Container>
  );
};

export default App;
