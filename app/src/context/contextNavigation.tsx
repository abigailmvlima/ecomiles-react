import { TAppState } from "@app/store";
import { THistory } from "@domain/types/THistory";
import { TNavigateRoute, TNavigation } from "@domain/types/TNavigation";
import show from "@show/index";
import { pushHistory } from "@stores/store.history";
import React, { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ContextNavigation = createContext({} as any);

export default ({ children }: any) => {
  const dispatch = useDispatch();

  const stateHitory: THistory = useSelector(
    (state: TAppState) => state.history
  );

  const goNow = (newRoute: string, data?: any) => {
    dispatch(pushHistory({ route: newRoute, data }));
  };

  const route: TNavigateRoute = {
    home: (data: any) => goNow(show.route.home, data),
    listPacient: (data: any) => goNow(show.route.listPacient, data),
    cadPaient: (data: any) => goNow(show.route.cadPacient, data),
  };

  const navigation: TNavigation = {
    history: stateHitory,
    route,
    go: goNow,
    goBack: () => {
      dispatch(
        pushHistory({ route: stateHitory?.routeOld || show.route.home })
      );
    },
  };

  return (
    <ContextNavigation.Provider value={navigation}>
      {children}
    </ContextNavigation.Provider>
  );
};
