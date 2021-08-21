import express, { Router } from "express";
import AnsietasController from "../../Controller/Ansietas";

const Routers: Router = express.Router();
const Controller = new AnsietasController();

Routers.get("/:id_user", Controller.findOne.bind(Controller));
Routers.post("/", Controller.create.bind(Controller));


export default Routers;