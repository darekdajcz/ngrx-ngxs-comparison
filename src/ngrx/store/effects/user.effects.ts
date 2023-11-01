import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { mergeMap, withLatestFrom, catchError } from 'rxjs/operators';
import * as UserActions from '../actions/user.actions';
import { AppState } from '../../app.state';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>
  ) {
  }

  removeUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.removeUser),
    mergeMap(action =>
      of(action).pipe(
        withLatestFrom(this.store.pipe(select('users'))),
      )
    ),
    mergeMap(([action, userState]) => {
      const userToBeRemoved = userState.users.find(user => user.name === action.name);

      if (!userToBeRemoved) {
        return of({ type: 'NO_ACTION' });
      }

      return [
        UserActions.addUserToDeletedHistory({ user: userToBeRemoved }),
        UserActions.deleteUser({ name: action.name })
      ];
    }),
    catchError((error, caught) => {
      console.error(error);
      return caught;
    })
  ));
}