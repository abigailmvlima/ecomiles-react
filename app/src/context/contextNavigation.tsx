import { TAppState } from "@app/store";
import { THistory } from "@domain/types/THistory";
import { TNavigateRoute, TNavigation } from "@domain/types/TNavigation";
import show from "@show/index";
import { pushHistory } from "@stores/store.history";
import React, { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ContextNavigation = createContext({} as any);

export default ({ children }: any) => {
  const dispatch = useDispatch();

  const stateHitory: THistory = useSelector(
    (state: TAppState) => state.history
  );

  useEffect(() => {
    // validacao de logado
  }, []);

  const goNow = (newRoute: string, data?: any) => {
    dispatch(pushHistory({ route: newRoute, data }));
  };

  const route: TNavigateRoute = {
    home: (data: any) => goNow(show.route.home, data),
    login: (data: any) => goNow(show.route.login, data),
    message: (data: any) => goNow(show.route.message, data),
    codeBar: (data: any) => goNow(show.route.codeBar, data),
    register: (data: any) => goNow(show.route.register, data),
  };

  const navigation: TNavigation = {
    history: stateHitory,
    route,
    go: goNow,
    goBack: () => {
      dispatch(
        pushHistory({ route: stateHitory?.routeOld || show.route.login })
      );
    },
  };

  return (
    <ContextNavigation.Provider value={navigation}>
      {children}
    </ContextNavigation.Provider>
  );
};
