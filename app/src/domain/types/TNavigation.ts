import { INavigateRouteFunc } from "@domain/interfaces/INavigation";
import { THistory } from "@domain/types/THistory";

export interface INavigate {
  (newRoute: string, data?: any): void;
}

export interface IFunction {
  (): void;
}

export interface IFunctionAuthFace {
  (route: string): void;
}

export type TNavigateRoute = {
  home: INavigateRouteFunc;
  login: INavigateRouteFunc;
  message: INavigateRouteFunc;
  codeBar: INavigateRouteFunc;
  register: INavigateRouteFunc;
};

export type TNavigation = {
  go: INavigate;
  goBack: IFunction;
  history: THistory;
  route: TNavigateRoute;
};
