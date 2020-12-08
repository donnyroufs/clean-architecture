import "reflect-metadata";
import { HttpException } from "../../exception/HttpException";
import { BaseController } from "../../controller/BaseController";

describe("Base controller", () => {
  let baseController = new BaseController();

  it("should throw a HttpException on call", () => {
    expect(() => {
      throw baseController.badRequest();
    }).toThrow(HttpException);

    expect(() => {
      throw baseController.notFound();
    }).toThrow(HttpException);

    expect(() => {
      throw baseController.notAuthorized();
    }).toThrow(HttpException);
  });
});
