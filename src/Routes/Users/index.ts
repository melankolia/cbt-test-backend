import express, { Router } from "express";
import UsersController from "../../Controller/Users";

const Routers: Router = express.Router();
const Controller = new UsersController();

Routers.get("/", Controller.findAll.bind(Controller));
Routers.post("/login", Controller.userLogin.bind(Controller));
Routers.post("/", Controller.createUser.bind(Controller));

export default Routers;