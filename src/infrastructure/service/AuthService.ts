import { AuthValidationException } from "../exception/AuthValidationException";
import { IAuthService } from "../../application/interface/service/IAuthService";
import { injectable } from "inversify";
import * as jwt from "jsonwebtoken";

@injectable()
export class AuthService implements IAuthService {
  public generateToken(payload: object) {
    const token = jwt.sign({ ...payload }, "some-secret");
    return token;
  }

  public comparePasswords(password: string, hashed_password: string) {
    return password === hashed_password;
  }
}
