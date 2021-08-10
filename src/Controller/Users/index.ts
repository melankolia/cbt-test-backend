import { Request, Response, NextFunction } from "express";
import UserService from "../../Services/Users";
import Responses from "../../Utils/Helper/Response";

class User {
    userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async createUser(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            // if (!req.body?.name) throw "Name Required"
        } catch (error) {
            return Responses.badRequest(res, error, next);
        }

        try {
            const Result = await this.userService.create(req.body?.name);
            console.log(Result);

            Responses.success(res, Result);
        } catch (error) {
            return Responses.failed(res, error, next)
        }
    }
}

export default User