import "reflect-metadata";

import { Container } from "inversify";
import { User, Core } from "./modules/index";

const container = new Container();

container.load(Core, User);

export { container, Core, User };
