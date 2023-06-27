export interface ICreateUserFn {
  (email: string, password: string): Promise<any>;
}
