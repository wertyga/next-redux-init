import { RootState } from 'types/root';
import { getOrInitializeStore } from '../initializeStore';

type RootActionResult<R = any> = {
  rootState: RootState;
  dispatch: (v: R) => void;
};

export const rootAction = <R = any>(): RootActionResult<R> => {
  const rootStore = getOrInitializeStore();
  return {
    rootState: rootStore.getState(),
    dispatch: rootStore.dispatch,
  };
};
