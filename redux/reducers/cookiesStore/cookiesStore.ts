import Cookies, { CookieSetOptions } from 'universal-cookie';
import { CookieAction, COOKIE_TYPES, CookieState } from 'types/cookies';

const MONTH_IN_SECONDS = 2592000;
const defaultOptions = {
  path: '/',
  maxAge: MONTH_IN_SECONDS,
} as CookieSetOptions;

export const cookiesStore = (
  state: CookieState = {},
  { type, data }: CookieAction
) => {
  const cookies = new Cookies(state);

  switch (type) {
    case COOKIE_TYPES.SET_INITIAL:
      return cookies.getAll();

    case COOKIE_TYPES.SET_COOKIE: {
      const { name, value, options = defaultOptions } = data;
      cookies.set(name, value, options);
      return cookies.getAll();
    }

    case COOKIE_TYPES.REMOVE_COOKIE: {
      cookies.remove(data.name);
      return cookies.getAll();
    }

    default:
      return state;
  }
};
