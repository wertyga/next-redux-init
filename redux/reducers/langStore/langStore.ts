import { LANG_TYPES, LangState } from 'types';

export const langStore = (
  state: LangState = {} as LangState,
  { type, data }
) => {
  switch (type) {
    case LANG_TYPES.SET_DATA:
      return data;

    default:
      return state;
  }
};
