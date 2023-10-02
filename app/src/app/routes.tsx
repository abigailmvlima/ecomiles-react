import { Route, Switch } from "react-router-native";

import show from "@show/index";

import ViewCodeBar from "@view/viewCodeBar";
import ViewLogin from "@view/viewLogin";
import ViewMessage from "@view/viewMessage";
import ViewRegister from "@view/viewRegister";
import ViewRegisterCompanyStep1 from "@view/viewRegisterCompanyStep1";
import ViewRegisterPersonStep1 from "@view/viewRegisterPersonStep1";

const Routes = () => {
  return (
    <Switch>
      <Route
        path={show.route.registerPersonStep1}
        component={ViewRegisterPersonStep1}
      />
      <Route
        path={show.route.registerCompanyStep1}
        component={ViewRegisterCompanyStep1}
      />
      <Route path={show.route.register} component={ViewRegister} />
      <Route path={show.route.codeBar} component={ViewCodeBar} />
      <Route path={show.route.message} component={ViewMessage} />
      <Route path={show.route.login} component={ViewLogin} />
      <Route exact component={ViewLogin} />
    </Switch>
  );
};

export default Routes;
