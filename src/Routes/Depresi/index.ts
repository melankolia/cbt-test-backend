import express, { Router } from "express";
import DepresiController from "../../Controller/Depresi";

const Routers: Router = express.Router();
const Controller = new DepresiController();

Routers.get("/", Controller.findAll.bind(Controller));
Routers.get("/:id_user", Controller.findOne.bind(Controller));
Routers.post("/", Controller.create.bind(Controller));


export default Routers;