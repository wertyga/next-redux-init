import { MESSAGES_TYPES } from 'types/messages';
import { rootAction } from '../rootAction';

export const setMessages = (messages: Record<string, number>) => {
  const { dispatch } = rootAction();

  dispatch({
    type: MESSAGES_TYPES.SET_MESSAGES,
    data: messages,
  });
};

export const updateCount = (
  message: Record<string, number>,
  type: 'set' | 'update'
) => {
  const { dispatch } = rootAction();

  dispatch({
    type:
      type === 'set' ? MESSAGES_TYPES.SET_COUNT : MESSAGES_TYPES.UPDATE_COUNT,
    data: message,
  });
};
