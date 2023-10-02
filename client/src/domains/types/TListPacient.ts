import { RuleSet } from 'styled-components';

export type TListPacient = {
  [EPacientTitles.id]: {
    value: string | number;
  };
  name: {
    title: string;
  };
  phone: {
    title: string;
  };
  mail: {
    title: string;
  };
  dateBirth: {
    title: string;
  };
  city: {
    title: string;
  };
  actions: {
    title: string;
  };
  [key: string]: any;
};

export enum EPacientTitles {
  id = 'id',
  name = 'name',
  phone = 'phone',
  mail = 'mail',
  dateBirth = 'dateBirth',
  city = 'city',
  actions = 'actions',
}

export type TTitles = {
  name: string;
  label?: string;
  icon?: any;
  css?: RuleSet<object>;
  ccsTitle?: RuleSet<object>;
};

export type TOnchangeData = { name: string; value: string };
