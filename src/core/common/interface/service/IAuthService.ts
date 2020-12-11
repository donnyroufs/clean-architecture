export interface IAuthService {
  generateToken(payload: object): string;
  comparePasswords(password: string, hashed_password: string);
  generateHashedPassword(password: string): string;
}
