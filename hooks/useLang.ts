import useSelector from 'hooks/useSelector';
import { LangState } from '../types';

export const useLang = () => {
  const {
    langStore: { currentLang, content = {} as LangState['content'] },
  } = useSelector('langStore');

  return { currentLang, ...content };
};
