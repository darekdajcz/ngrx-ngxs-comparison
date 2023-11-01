import { createReducer, on } from '@ngrx/store';
import { UserNGRX, UserNGRXState } from '../models/user-state.models';
import { addUser, addUserToDeletedHistory, deleteUser } from '../actions/user.actions';

export const initialState: UserNGRXState = {
  users: [],
  deletedUsersHistory: []
};
export const userReducer = createReducer(
  initialState,
  on(addUser, (state, { user }) =>
    ({ ...state, users: [...state.users, user] })
  ),
  on(deleteUser, (state, { name }) =>
    ({ ...state, users: state.users.filter(user => user.name !== name) })
  ),
  on(addUserToDeletedHistory, (state, { user }) => ({
      ...state,
      deletedUsersHistory: [...state.deletedUsersHistory, user]
    })
  )
);
