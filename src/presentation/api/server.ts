import "dotenv/config";

import * as express from "express";
import { HttpException } from "./exception/HttpException";

import { container } from "@config/container";
import { InversifyExpressServer } from "inversify-express-utils";

import * as morgan from "morgan";

import "./controller/UserController";

const server = new InversifyExpressServer(container);

server.setConfig((application: express.Application) => {
  application.use(express.json());
  application.use(morgan("common"));
});

server.setErrorConfig((app) => {
  app.use((err, req, res, next) => {
    if (err instanceof HttpException) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }

    return res.status(500).json(err);
  });
});

export const app = server.build();

app.listen(process.env.PORT, () =>
  console.log(`server is running on http://localhost:${process.env.PORT}`)
);
