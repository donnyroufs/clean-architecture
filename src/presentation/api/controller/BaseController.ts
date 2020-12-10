import { HttpException } from "../exception/HttpException";
import { injectable } from "inversify";

@injectable()
export class BaseController {
  badRequest(message: string = "Bad Request") {
    throw new HttpException(400, message);
  }

  notAuthorized(message: string = "Not Authorized") {
    throw new HttpException(403, message);
  }

  notFound(message: string = "Not Found") {
    throw new HttpException(404, message);
  }
}
