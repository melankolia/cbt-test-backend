import express, { Router } from "express";
import SurveysController from "../../Controller/Surveys";

const Routers: Router = express.Router();
const Controller = new SurveysController();

Routers.get("/:id_user", Controller.findOne.bind(Controller));
Routers.post("/", Controller.create.bind(Controller));


export default Routers;