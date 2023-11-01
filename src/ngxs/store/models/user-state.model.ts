export interface User {
  name: string;
  email: string;
}
export interface UserStateModel {
  users: User[];
  deletedUsers: User[];
}