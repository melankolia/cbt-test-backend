import express, { Router } from "express";
import AnsietasController from "../../Controller/Ansietas";

const Routers: Router = express.Router();
const Controller = new AnsietasController();

Routers.get("/", Controller.findAll.bind(Controller));
Routers.post("/", Controller.create.bind(Controller));


export default Routers;