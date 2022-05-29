import { UserState } from './user';
import { CookieState } from './cookies';
import { MarathonState } from './marathon';
import { NotifyState } from './notify';
import { TrainingsState } from './training';
import { ProgressState } from './progress';
import { StartMarathonState } from './startMarathon';
import { MessagesStoreState } from './messages';
import { DeviceStoreState } from './device';
import { LangState } from './lang';

export type RootState = {
  userStore: UserState;
  cookiesStore: CookieState;
  marathonStore: MarathonState;
  notifyStore: NotifyState;
  trainingsStore: TrainingsState;
  progressStore: ProgressState;
  startMarathonStore: StartMarathonState;
  messagesStore: MessagesStoreState;
  deviceStore: DeviceStoreState;
  langStore: LangState;
};

export type ClassName = string | Record<string, boolean>;
