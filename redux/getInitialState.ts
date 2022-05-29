import { NextPageContext } from 'next';
import Cookies from 'universal-cookie';
import { RootState } from 'types';
import { getDevice } from 'redux/actions/device/device';
import { getLang } from 'apis/lang';

const getCookies = req => {
  const cookies = new Cookies(req.headers.cookie);
  return cookies.getAll();
};

export const getInitialState = async ({
  req,
}: NextPageContext): Promise<Partial<RootState>> => {
  const cookiesStore = getCookies(req);

  try {
    // const [langStore] = await Promise.all([getLang(cookiesStore['user-lang'])]);
    return {
      cookiesStore,
      // langStore,
      // deviceStore: getDevice(req.headers['user-agent']),
    };
  } catch (e) {
    return {};
  }
};
