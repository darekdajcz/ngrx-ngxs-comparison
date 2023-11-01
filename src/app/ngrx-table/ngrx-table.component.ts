import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx/app.state';
import * as UserActions from '../../ngrx/store/actions/user.actions';
import { getDeletedUsersHistory, getUsers } from '../../ngrx/store/selectors/user.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ngrx-table',
  templateUrl: './ngrx-table.component.html',
  styles: [`.custom-strikethrough {
      text-decoration: line-through;
      font-size: 18px;
      color: darkred;
  }`
  ]
})
export class NgrxTableComponent {
  ngrxStore = inject(Store<AppState>);

  users$: Observable<any> = this.ngrxStore.select(getUsers);
  removedUsers$: Observable<any> = this.ngrxStore.select(getDeletedUsersHistory);

  deleteUser(name: string): void {
    this.ngrxStore.dispatch(UserActions.removeUser({ name }));
  }

  click(): void {
    this.ngrxStore.subscribe(state => {
      console.log(state);
    });
  }
}
