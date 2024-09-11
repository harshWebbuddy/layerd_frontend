import { IUser } from "./IUser";

export interface IReduxValue {
  user: {
    data: IUser;
  };
  email: {
    data: string;
  };
}
