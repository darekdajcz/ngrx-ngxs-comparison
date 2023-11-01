import { Selector } from "@ngxs/store";
import { User, UserStateModel } from '../models/user-state.model';
import { UserState } from '../states/user.state';

export class UserSelectors {
  @Selector([UserState])
  static getUsers(state: UserStateModel): User[] {
    return state.users
  }

  @Selector([UserState])
  static getDeletedHistoryUsers(state: UserStateModel): User[] {
    return state.deletedUsers
  }
}
