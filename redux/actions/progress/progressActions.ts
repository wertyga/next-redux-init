import { Progress } from 'graphql/types';
import { PROGRESS_TYPES, ProgressState } from 'types/progress';
import { rootAction } from '../rootAction';

export const setProgressAction = (data: Partial<ProgressState>) => {
  const { dispatch } = rootAction();

  dispatch({
    type: PROGRESS_TYPES.SET_PROGRESS,
    data,
  });
};

export const updateProgressAction = (progress: Progress) => {
  const {
    rootState: { progressStore },
    dispatch,
  } = rootAction();

  dispatch({
    type: PROGRESS_TYPES.SET_PROGRESS,
    data: {
      ...progressStore,
      [progress._id]: progress,
    },
  });
};
