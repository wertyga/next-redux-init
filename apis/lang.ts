import axios from 'axios';
import { LangState } from 'types';

export const getLang = async (lang?: string): Promise<LangState> => {
  try {
    const { data } = await axios({
      method: 'get',
      url: `${process.env.API_GATEWAY}/lang`,
      params: {
        lang,
      },
    });

    return data;
  } catch (e) {
    console.log(e, e.message);
  }
};
