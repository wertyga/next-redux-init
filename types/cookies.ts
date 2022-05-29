import { CookieSetOptions } from 'universal-cookie';

export enum COOKIE_TYPES {
  SET_COOKIE = 'SET_COOKIE',
  SET_INITIAL = 'SET_INITIAL',
  REMOVE_COOKIE = 'REMOVE_COOKIE',
}

export type CookieState = Record<string, string>;

export interface CookieAction {
  type: COOKIE_TYPES;
  data: {
    name: string;
    value?: string | number;
    options?: CookieSetOptions;
  };
}
