import express, { Router } from "express";
import CBT_Controller from "../../../Controller/CBT/MainSection";

const Routers: Router = express.Router();
const Controller = new CBT_Controller();

Routers.post("/", Controller.create.bind(Controller));


export default Routers;