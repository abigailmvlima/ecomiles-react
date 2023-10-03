import { Route, Switch } from "react-router-native";

import show from "@show/index";
import ViewCadPacient from "@view/viewCadPacient";
import ViewHome from "@view/viewHome";
import ViewListPacient from "@view/viewListPacient";

const Routes = () => {
  return (
    <Switch>
      <Route path={show.route.listPacient} component={ViewListPacient} />
      <Route path={show.route.cadPacient} component={ViewCadPacient} />
      <Route path={show.route.home} component={ViewHome} />
    </Switch>
  );
};

export default Routes;
