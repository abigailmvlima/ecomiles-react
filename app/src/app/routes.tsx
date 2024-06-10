import { Route, Switch } from "react-router-native";

import show from "@show/index";
import ViewChallengeDetail from "@view/viewChallengeDetail";
import ViewChallengeRegister from "@view/viewChallengeRegister";
import ViewChallenges from "@view/viewChallenges";
import ViewChat from "@view/viewChat";
import ViewHome from "@view/viewHome";
import ViewLogin from "@view/viewLogin";
import ViewMenu from "@view/viewMenu";
import ViewRegister from "@view/viewRegister";
import ViewReward from "@view/viewReward";
import ViewUserEdit from "@view/viewUserEdit";

const Routes = () => {
  return (
    <Switch>
      <Route
        path={show.route.challengeRegister}
        component={ViewChallengeRegister}
      />
      <Route
        path={show.route.challengeDetail}
        component={ViewChallengeDetail}
      />
      <Route path={show.route.challenge} component={ViewChallenges} />
      <Route path={show.route.home} component={ViewHome} />
      <Route path={show.route.menu} component={ViewMenu} />
      <Route path={show.route.reward} component={ViewReward} />
      <Route path={show.route.chat} component={ViewChat} />
      <Route path={show.route.login} component={ViewLogin} />
      <Route path={show.route.register} component={ViewRegister} />
      <Route path={show.route.userEdit} component={ViewUserEdit} />
      <Route exact component={ViewLogin} />
    </Switch>
  );
};

export default Routes;
