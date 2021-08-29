import { Request, Response, NextFunction } from "express";
import UserService from "../../Services/Users";
import Responses from "../../Utils/Helper/Response";
import { PayloadUser, PayloadCreateUser, PayloadFindUsers, PayloadUpdateStatus } from "../../Services/Users/index.d"
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
            const Result = await this.userService.find(payload)
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

    public async findAll(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const payload = {
                search: req.query?.search || "",
                limit: req.query?.limit || 10,
                page: req.query.page ? parseInt(req.query.page as string) - 1 : 0
            } as PayloadFindUsers
            const Result = await this.userService.findAll(payload);
            Responses.success(res, Result);
        } catch (error) {
            return Responses.failed(res, error, next)
        }
    }

    public async findOne(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            if (!req.params?.secureId) throw "SecureId Required"
        } catch (error) {
            return Responses.badRequest(res, error, next)
        }

        try {
            const Result = await this.userService.findOne(req.params.secureId as string);
            Responses.success(res, Result);
        } catch (error) {
            return Responses.failed(res, error, next)
        }
    }

    public async updateStatus(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            if (!req.body?.id) throw "Id required"
        } catch (error) {
            return Responses.badRequest(res, error, next)
        }

        try {
            const payload = {
                id: req.body.id,
                status: req.body?.status || "Sehat"
            } as PayloadUpdateStatus
            const Result = await this.userService.updateStatus(payload);

            Responses.success(res, Result);
        } catch (error) {
            return Responses.failed(res, error, next)
        }
    }
}

export default User