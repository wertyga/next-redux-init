import MobileDetect from 'mobile-detect';
import { DeviceStoreState } from 'types';

export const getDevice = (userAgent: string): DeviceStoreState => {
  const md = new MobileDetect(userAgent);
  const device =
    (md.tablet() && 'tablet') || (md.mobile() && 'mobile') || 'desktop';
  const isMobile = device === 'tablet' || device === 'mobile';
  return {
    device,
    isMobile,
  };
};
