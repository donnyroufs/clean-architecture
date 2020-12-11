import "reflect-metadata";

import { IAuthService } from "@core/common/interface/service/IAuthService";
import { injectable } from "inversify";

// ? Should be injected?
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
