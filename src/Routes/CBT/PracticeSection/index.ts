import express, { Router } from "express";
import CBT_Controller from "../../../Controller/CBT/PracticeSection";

const Routers: Router = express.Router();
const Controller = new CBT_Controller();

Routers.post("/", Controller.create.bind(Controller));


export default Routers;