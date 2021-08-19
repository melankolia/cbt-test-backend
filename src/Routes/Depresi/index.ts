import express, { Router } from "express";
import DepresiController from "../../Controller/Depresi";

const Routers: Router = express.Router();
const Controller = new DepresiController();

Routers.post("/", Controller.create.bind(Controller));


export default Routers;