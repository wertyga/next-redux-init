export type DeviceStoreState = {
  isMobile?: boolean;
  device: 'mobile' | 'tablet' | 'desktop';
};

export enum DEVICE_TYPES {
  SET_DEVICE_STORE = 'SET_DEVICE_STORE',
}
