import { User } from '../models/user-state.model';

export const addUserType = '[User] Add';

export class AddUser {
  static readonly type = addUserType;
  constructor(public payload: User) {}
}

export const deleteUserType = '[User] Delete';

export class DeleteUser {
  static readonly type = deleteUserType;
  constructor(public name: string) {}
}

export const addDeleteListType = '[User] Add to Deleted';
export class AddToDeletedUsers {
  static readonly type = addDeleteListType;
  constructor(public user: User) {}
}