import { RuleSet } from 'styled-components';

export type TListPacient = {
  [any: string]: {
    title?: string;
    value?: any;
  };
};

export type TTitles = {
  name: string;
  label?: string;
  icon?: any;
  css?: RuleSet<object>;
  ccsTitle?: RuleSet<object>;
};
