import { Request, Response, NextFunction } from "express";
import UserService from "../../Services/Users";
import Responses from "../../Utils/Helper/Response";
import { PayloadUser, PayloadCreateUser } from "../../Services/Users/index.d"
import { v4 as uuidv4 } from "uuid"

class User {
    userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async userLogin(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            if (!req.body?.username) throw "Usename Required"
            else if (!req.body?.password) throw "Password Required"
        } catch (error) {
            return Responses.badRequest(res, error, next);
        }

        try {
            const payload = {
                username: req.body.username,
                password: req.body.password
            } as PayloadUser;
            const Result = await this.userService.findAll(payload)
            Responses.success(res, Result);
        } catch (error) {
            return Responses.failed(res, error, next)
        }
    }

    public async createUser(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            if (!req.body?.username) throw "Usename Required"
            else if (!req.body?.name) throw "Name Required"
            else if (!req.body?.password) throw "Password Required"
        } catch (error) {
            return Responses.badRequest(res, error, next);
        }

        try {
            const payload = {
                id: uuidv4(),
                username: req.body.username,
                name: req.body.name,
                password: req.body.password
            } as PayloadCreateUser;
            const Result = await this.userService.create(payload);

            Responses.success(res, Result);
        } catch (error) {
            return Responses.failed(res, error, next)
        }
    }
}

export default User