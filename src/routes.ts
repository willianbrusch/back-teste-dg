import { Router } from "express";
import { PersonController } from "./controllers/PersonController";

const routes = Router();

routes.post("/person", new PersonController().create);
routes.patch("/person", new PersonController().update);
routes.delete("/person/:id", new PersonController().delete);
routes.get("/person", new PersonController().getAllPersons);

export default routes;
