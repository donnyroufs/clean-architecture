import { IAuthService } from "@core/common/interface/service/IAuthService";
import { injectable } from "inversify";

// ? Should be injected?
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

@injectable()
export class AuthService implements IAuthService {
  public generateToken(payload: object) {
    const token = jwt.sign({ ...payload }, "some-secret");
    return token;
  }

  public comparePasswords(password: string, hashed_password: string) {
    return bcrypt.compareSync(password, hashed_password);
  }

  public generateHashedPassword(password: string) {
    return bcrypt.hashSync(password);
  }
}
