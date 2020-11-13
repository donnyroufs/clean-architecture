import { inject } from "inversify";
import { types } from "../../configuration/types";
import {
  controller,
  httpPost,
  response,
  request,
  requestParam,
  requestBody,
} from "inversify-express-utils";
import * as express from "express";
import { UserLoginRequestDto } from "../../application/dto/UserLoginRequestDto";
import { UserService } from "../../application/service/UserService";

@controller("/user")
export class UserController {
  @inject(types.UserService) private readonly userService: UserService;

  @httpPost("/:email")
  async login(
    @requestParam("email") email: string,
    @requestBody() body: UserLoginRequestDto,
    @response() res: express.Response
  ) {
    const loginResult = await this.userService.login({
      email,
      password: body.password,
    });

    res.json(loginResult);
  }
}
