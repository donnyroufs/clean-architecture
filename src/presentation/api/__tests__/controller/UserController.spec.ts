import "reflect-metadata";

import { MockedDatabase } from "./../mocks/MockedDatabase";
import { IDatabase } from "@infra/interface/IDatabase";
import { Core } from "@config/container";
import { Container } from "inversify";
import { types } from "@core/common/types";
import { app } from "@presentation/api/server";

import * as supertest from "supertest";

const request = supertest(app);

describe("User Controller", () => {
  let container: Container;

  beforeEach(() => {
    container = new Container({
      autoBindInjectable: true,
    });

    container.load(Core);
    container.unbind(types.IDatabase);
    container.bind<IDatabase>(types.IDatabase).to(MockedDatabase);
  });

  afterEach(() => {
    container = null;
  });

  it("Should send a bad request response when it gets an invalid body", (done) => {
    request
      .post("/user/login")
      .set("Accept", "application/json")
      .send({ emal: "john@test.com", passwd: "123456" })
      .expect(400)
      .end(done);
  });

  it("Should return a 404 if there is no user found", (done) => {
    request
      .post("/user/login")
      .set("Accept", "application/json")
      .send({ email: "joh@te.com", password: "123456" })
      .expect(404)
      .end(done);
  });

  it("Should create a new token upon valid credentials", (done) => {
    request
      .post("/user/login")
      .set("Accept", "application/json")
      .send({ email: "john@test.com", password: "123456" })
      .expect((res) => {
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("token");
        expect(res.body.email).toBe("john@test.com");
      })
      .end(done);
  });
});
