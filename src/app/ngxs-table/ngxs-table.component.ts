import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { UserSelectors } from '../../ngxs/store/selectors/user.selectors';
import { DeleteUser } from '../../ngxs/store/actions/user.actions';

@Component({
  selector: 'app-ngxs-table',
  templateUrl: './ngxs-table.component.html',
  styles: [`.custom-strikethrough {
      text-decoration: line-through;
      font-size: 18px;
      color: darkred;
  }`
  ]
})
export class NgxsTableComponent {
  ngxsStore = inject(Store);

  @Select(UserSelectors.getUsers) users$!: Observable<any>;
  @Select(UserSelectors.getDeletedHistoryUsers) removedUsers$!: Observable<any>;

  deleteUser(name: string): void {
    this.ngxsStore.dispatch(new DeleteUser(name)).subscribe();
  }

  click(): void {
    this.ngxsStore.subscribe(state => console.log(state));
  }
}
