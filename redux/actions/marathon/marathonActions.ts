import { MARATHON_TYPES, MarathonState } from 'types/marathon';

import { rootAction } from '../rootAction';

export const setMarathonAction = (data: Partial<MarathonState>) => {
  const {
    dispatch,
    rootState: { marathonStore },
  } = rootAction();
  dispatch({
    type: MARATHON_TYPES.SET_MARATHON,
    data: {
      ...marathonStore,
      ...data,
    },
  });
};
