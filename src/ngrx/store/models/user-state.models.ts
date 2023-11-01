export interface UserNGRX {
  name: string;
  email: string;
}

export interface UserNGRXState {
  users: UserNGRX[];
  deletedUsersHistory: UserNGRX[];
}