import { UserPayment, User } from 'graphql/types';

export enum USER_TYPES {
  SET_USER = 'SET_USER',
  USER_LOGOUT = 'USER_LOGOUT',
}

export type UserState = User & {
  payment: UserPayment['payment'] & {
    subscription: UserPayment['subscription'];
  };
  userId?: string;
};

export type UserAction = {
  type: USER_TYPES;
  data: Record<keyof UserState, string>;
};

export type GetUserVars = {
  id: number;
};
export type GetUserData = {
  id: number;
  username: string;
};
