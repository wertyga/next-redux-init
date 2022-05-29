import { DeviceStoreState, DEVICE_TYPES } from 'types';

const initialState = {} as DeviceStoreState;

export const deviceStore = (
  state: DeviceStoreState = initialState,
  { type, data }: { type: DEVICE_TYPES; data: DeviceStoreState }
) => {
  switch (type) {
    case DEVICE_TYPES.SET_DEVICE_STORE:
      return data;

    default:
      return state;
  }
};
