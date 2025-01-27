import { createAction, props } from '@ngrx/store';

export const addNotification = createAction('[Notification] Add Notification', props<{ message: string }>());
export const removeNotification = createAction('[Notification] Remove Notification', props<{ id: number }>());