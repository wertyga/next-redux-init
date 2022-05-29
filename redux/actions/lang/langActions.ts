import { getLang } from 'apis/lang';
import { COOKIE_TYPES, LANG_TYPES } from 'types';
import { rootAction } from '../rootAction';

export const changeLang = async (lang: string) => {
  const langState = await getLang(lang);
  const { dispatch } = rootAction();
  dispatch({
    type: LANG_TYPES.SET_DATA,
    data: langState,
  });
  dispatch({
    type: COOKIE_TYPES.SET_COOKIE,
    data: {
      name: 'user-lang',
      value: langState.currentLang,
    },
  });
};
