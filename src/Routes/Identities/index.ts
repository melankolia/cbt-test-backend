import express, { Router } from "express";
import IdentitiesController from "../../Controller/Identities";

const Routers: Router = express.Router();
const Controller = new IdentitiesController();

Routers.get("/:id_user", Controller.findOne.bind(Controller));
Routers.post("/", Controller.create.bind(Controller));


export default Routers;