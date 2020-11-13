import "reflect-metadata";

import * as express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./configuration/container";

// HTTP Controllers
import "./entrypoint/controller/UserController";

const server = new InversifyExpressServer(container);

server.setConfig((application: express.Application) => {
  application.use(express.json());
});

const app = server.build();

app.listen(5000, () =>
  console.log(`server is running on http://localhost:5000`)
);
