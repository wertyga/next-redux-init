import { USER_TYPES, UserState } from 'types/user';
import { COOKIE_TYPES } from 'types/cookies';
import { fetchUserPayment } from 'apis/payment';
import { rootAction } from '../rootAction';

export const setUser = (user: UserState) => {
  const { dispatch } = rootAction();
  const { __typename, ...restUser } = user;
  dispatch({
    type: USER_TYPES.SET_USER,
    data: {
      ...restUser,
      userId: restUser._id,
    },
  });
  dispatch({
    type: COOKIE_TYPES.SET_COOKIE,
    data: {
      name: 'token',
      value: restUser.token,
    },
  });
};

export const logoutUser = () => {
  const { dispatch } = rootAction();
  dispatch({
    type: USER_TYPES.USER_LOGOUT,
  });
  dispatch({
    type: COOKIE_TYPES.REMOVE_COOKIE,
    data: {
      name: 'token',
    },
  });
};

export const getUserPayment = async () => {
  const {
    dispatch,
    rootState: { userStore },
  } = rootAction();
  if (!userStore || !userStore._id) return;
  const payment = await fetchUserPayment(userStore._id);
  dispatch({
    type: USER_TYPES.SET_USER,
    data: {
      ...userStore,
      userId: userStore._id,
      payment: payment || {},
    },
  });
};
