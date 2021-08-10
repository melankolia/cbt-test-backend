import express, { Router, Request, Response, NextFunction } from "express";

import Users from "./Users";

const Routers: Router = express.Router();
Routers.use("/users", Users);

Routers.use("/", (req: Request, res: Response, next: NextFunction): any =>
    res.send("Node JS Running")
);

export default Routers;


