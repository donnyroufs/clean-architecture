import "reflect-metadata";

import { HttpException } from "../../exception/HttpException";
import { BaseController } from "../../controller/BaseController";

describe("Base controller", () => {
  let baseController = new BaseController();

  it("should throw a HttpException on call", () => {
    expect(() => {
      baseController.badRequest();
    }).toThrow(HttpException);

    expect(() => {
      baseController.notFound();
    }).toThrow(HttpException);

    expect(() => {
      baseController.notAuthorized();
    }).toThrow(HttpException);
  });
});
