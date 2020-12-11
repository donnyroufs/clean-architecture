export class UserRegisterRequestDto {
  public email: string;
  public password: string;

  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }
}
