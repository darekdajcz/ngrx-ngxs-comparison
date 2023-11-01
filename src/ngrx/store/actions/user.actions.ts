import { createAction, props } from '@ngrx/store';
import { UserNGRX } from '../models/user-state.models';

export const addUserType = '[User] Add User';
export const addUser = createAction(addUserType, props<{ user: UserNGRX }>());
export const removeUserType = '[User] Remove User';
export const removeUser = createAction(removeUserType, props<{ name: string }>());
export const deleteUserType = '[User] Delete User';

export const deleteUser = createAction(deleteUserType, props<{ name: string }>());

export const addUserToDeletedHistory = createAction(
  '[User] Add User to Deleted History',
  props<{ user: UserNGRX }>()
);