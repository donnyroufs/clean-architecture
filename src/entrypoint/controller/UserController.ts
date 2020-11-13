import * as express from "express";

import { UserLoginRequestDto } from "../../application/dto/UserLoginRequestDto";
import { UserService } from "../../application/service/UserService";
import { inject } from "inversify";
import { types } from "../../configuration/types";
import {
  controller,
  httpPost,
  response,
  requestBody,
} from "inversify-express-utils";

@controller("/user")
export class UserController {
  @inject(types.UserService) private readonly userService: UserService;

  @httpPost("/login")
  async login(
    @requestBody() body: UserLoginRequestDto,
    @response() res: express.Response
  ) {

    if (!body.email || !body.password) {
      return res.status(400).json({ error: "Missing credentials" });
    }

    const loginResult = await this.userService.login(body);
    
    res.status(201).json(loginResult);
  }
}
