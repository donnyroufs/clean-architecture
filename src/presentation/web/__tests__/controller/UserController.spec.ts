import { MockedDatabase } from "./../mocks/MockedDatabase";
import "reflect-metadata";

import { app } from "../../../bootstrap";
import { UserController } from "./../../controller/UserController";
import * as supertest from "supertest";

describe("User Controller", () => {
  let userController = new UserController();
  let mockedDatabase = null;
  let request = supertest(app);

  beforeEach(() => {
    let mockedDatabase = new MockedDatabase("User");
  });

  it("Should login the user", () => {});
});
