import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';
import { UserNGRXState } from '../models/user-state.models';

const getUserFeatureState = createFeatureSelector<UserNGRXState>('users')

export const getUsers = createSelector(
  getUserFeatureState,
  state => state.users
);

export const getDeletedUsersHistory = createSelector(
  getUserFeatureState,
  state => state.deletedUsersHistory
);
