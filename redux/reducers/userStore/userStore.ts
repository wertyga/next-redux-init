import { UserAction, UserState, USER_TYPES } from 'types/user';

const initialState = {} as UserState;

export const userStore = (
  state: UserState = initialState,
  { type, data }: UserAction
) => {
  switch (type) {
    case USER_TYPES.SET_USER:
      return data;

    case USER_TYPES.USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
