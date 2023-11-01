import { Action, State, StateContext } from '@ngxs/store';
import { UserStateModel } from '../models/user-state.model';
import { AddToDeletedUsers, AddUser, DeleteUser } from '../actions/user.actions';
import { Injectable } from '@angular/core';

@State<UserStateModel>({
  name: 'users',
  defaults: {
    users: [],
    deletedUsers: []
  }
})
@Injectable()
export class UserState {
  @Action(AddUser)
  add({ getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser): void {
    const state: UserStateModel = getState();
    patchState({
      users: [...state.users, payload]
    });
  }

  @Action(DeleteUser)
  delete(ctx: StateContext<UserStateModel>, { name }: DeleteUser): void {
    const state: UserStateModel = ctx.getState();
    const userToBeDeleted = state.users.find(user => user.name === name);

    if (userToBeDeleted) {
      ctx.patchState({
        users: state.users.filter(user => user.name !== name)
      });
      ctx.dispatch(new AddToDeletedUsers(userToBeDeleted));
    }

    // setState({
    //   ...state,
    //   users: state.users.filter((res)=> res.name !== name )
    // });
  }

  @Action(AddToDeletedUsers)
  addToDeleted(ctx: StateContext<UserStateModel>, { user }: AddToDeletedUsers): void {
    const state = ctx.getState();
    ctx.patchState({
      deletedUsers: [...state.deletedUsers, user]
    });
  }
}