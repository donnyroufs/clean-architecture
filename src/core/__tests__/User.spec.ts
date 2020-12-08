import { IUserEntity } from "@core/domain/interface/IUserEntity";
import { DomainValidationException } from "@core/common/exception/DomainValidationException";
import { User } from "@core/domain/UserEntity";

describe("create a new user entity", () => {
  let user;

  const userData = {
    id: 1,
    email: "john@doe.com",
    password: "test123",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  } as IUserEntity;

  afterEach(() => {
    user = null;
  });

  it("Should create an instance when given the proper data", () => {
    user = new User(userData);

    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(User);
  });

  it("Shouldn't do password validation when hashed is true", () => {
    user = new User({ ...userData, password: "1" }, true);

    expect(user).toBeDefined();
    expect(user).toBeInstanceOf(User);
    expect(user.password).toBe("1");
  });

  it("Should throw a validation exception when the email doesn't have an @ character", () => {
    expect(() => {
      user = new User({ ...userData, email: "test" });
    }).toThrow(DomainValidationException);
  });

  it("Should throw a validation exception when the password doesn't meet its length requirements", () => {
    expect(() => {
      user = new User({ ...userData, password: "test" });
    }).toThrow(DomainValidationException);
  });
});
