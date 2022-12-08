import { Router } from "express";
import cors from "cors"

import { CreatePortfolioController } from "./controllers/CreatePortfolioController";
import { GetAllPortfolioController } from "./controllers/GetAllPortfolioController";
import { DeletePortfolioController } from "./controllers/DeletePortfolioController";
import { UpdatePortfolioController } from "./controllers/UpdatePortfolioController";
import { GetOnePortfolioController } from "./controllers/GetOnePortfolioController";
import { CreateUserController } from "./controllers/CreateUserController"; 
import { GetOneUserController } from "./controllers/GetOneUserController";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const routes = Router();
routes.use(cors())

routes.put("/user/:id", new UpdateUserController().handle);
routes.post("/user", new CreateUserController().handle);
routes.get("/user", new GetAllUserController().handle);
routes.get("/user/:id", new GetOneUserController().handle);
routes.post("/portfolio", new CreatePortfolioController().handle);
routes.get("/portfolio", new GetAllPortfolioController().handle);
routes.get("/portfolio/:id", new GetOnePortfolioController().handle);
routes.delete("/portfolio/:id", new DeletePortfolioController().handle);
routes.put("/portfolio/:id", new UpdatePortfolioController().handle);

export { routes };