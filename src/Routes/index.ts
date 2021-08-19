import express, { Router, Request, Response, NextFunction } from "express";

import Users from "./Users";
import Ansietas from "./Ansietas";
import Depresi from "./Depresi";
import CBT_FirstSection from "./CBT/FirstSection";

const Routers: Router = express.Router();
Routers.use("/users", Users);
Routers.use("/ansietas", Ansietas);
Routers.use("/depresi", Depresi);
Routers.use("/cbt/first-section", CBT_FirstSection);


Routers.use("/", (req: Request, res: Response, next: NextFunction): any =>
    res.send("Node JS Running")
);

export default Routers;


