import { useEffect, useState } from 'react';
import useSelector from './useSelector';

const MOBILE_WIDTH = 1000;

export const useDevice = () => {
  const {
    deviceStore: { isMobile: storeMobile },
  } = useSelector('deviceStore');
  const [isMobile, setMobile] = useState(storeMobile);

  const detectScreenSize = () => {
    setMobile(window.innerWidth <= MOBILE_WIDTH);
  };

  useEffect(() => {
    window.addEventListener('resize', detectScreenSize);
    return () => {
      window.removeEventListener('resize', detectScreenSize);
    };
  }, []);

  return isMobile;
};
