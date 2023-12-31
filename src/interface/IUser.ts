export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}
