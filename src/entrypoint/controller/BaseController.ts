import { CustomError } from "./../error/CustomError";
import { injectable } from "inversify";

@injectable()
export class BaseController {
  badRequest(message: string = "Bad Request") {
    return new CustomError(400, message);
  }

  notAuthorized(message: string = "Not Authorized") {
    return new CustomError(403, message);
  }

  notFound(message: string = "Not Found") {
    return new CustomError(404, message);
  }
}
