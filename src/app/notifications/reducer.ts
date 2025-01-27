import { createReducer, on } from '@ngrx/store';
import { addNotification, removeNotification } from './actions';

export interface Notification {
  id: number;
  message: string;
}

export interface NotificationState {
  notifications: Notification[];
}

export const initialState: NotificationState = {
  notifications: []
};

export const notificationReducer = createReducer(
  initialState,
  on(addNotification, (state, { message }) => ({
    ...state,
    notifications: [...state.notifications, { id: state.notifications.length + 1, message }]
  })),
  on(removeNotification, (state, { id }) => ({
    ...state,
    notifications: state.notifications.filter(notification => notification.id !== id)
  }))
);

// see https://ngrx.io/guide/store/reducers to understand how reducers, actions and selectors work