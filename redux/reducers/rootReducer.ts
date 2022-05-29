import { combineReducers } from 'redux';
import { userStore } from './userStore/userStore';
import { cookiesStore } from './cookiesStore/cookiesStore';
import { notifyStore } from './notifyStore/notifyStore';
import { deviceStore } from './deviceStore/deviceStore';
import { langStore } from './langStore/langStore';

export const rootReducer = combineReducers({
  userStore,
  cookiesStore,
  notifyStore,
  deviceStore,
  langStore,
});
