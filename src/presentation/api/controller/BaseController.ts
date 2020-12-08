import { HttpException } from "../exception/HttpException";
import { injectable } from "inversify";

@injectable()
export class BaseController {
  badRequest(message: string = "Bad Request") {
    return new HttpException(400, message);
  }

  notAuthorized(message: string = "Not Authorized") {
    return new HttpException(403, message);
  }

  notFound(message: string = "Not Found") {
    return new HttpException(404, message);
  }
}
