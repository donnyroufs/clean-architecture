import * as express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "../../configuration/container";

import * as morgan from "morgan";

import "./controller/UserController";

const server = new InversifyExpressServer(container);

server.setConfig((application: express.Application) => {
  application.use(express.json());
  application.use(morgan("common"));
});

server.setErrorConfig((app) => {
  app.use((message: string, req, res, next) => {
    console.log(message);
    res.status(500).json({
      message,
    });
  });
});

export const app = server.build();

app.listen(5000, () =>
  console.log(`server is running on http://localhost:5000`)
);
