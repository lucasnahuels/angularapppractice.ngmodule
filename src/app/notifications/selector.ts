import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotificationState } from './reducer';

export const selectNotificationState = createFeatureSelector<NotificationState>('notifications');

export const selectAllNotifications = createSelector(
  selectNotificationState,
  (state: NotificationState) => state.notifications
);