export class UserLoginResponseDto {
  public email: string;
  public token?: string;

  constructor({ email, token }) {
    this.email = email;
    this.token = token;
  }
}
