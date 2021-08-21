import { Request, Response, NextFunction } from "express";
import DepresiService from "../../Services/Depresi";
import Responses from "../../Utils/Helper/Response";
import { PayloadDepresi } from "../../Services/Depresi/index.d";

class Depresi {
    depresiService: DepresiService

    constructor() {
        this.depresiService = new DepresiService();
    }

    public async findAll(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const Result = await this.depresiService.findAll();
            Responses.success(res, Result);
        } catch (error) {
            return Responses.failed(res, error, next)
        }
    }

    public async findOne(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            if (!req.params?.id_user) throw "Id User Required"
        } catch (error) {
            return Responses.badRequest(res, error, next);
        }

        try {
            const Result = await this.depresiService.findOne(req.params.id_user as string)
            Responses.success(res, Result);
        } catch (error) {
            return Responses.failed(res, error, next)
        }
    }

    public async create(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            if (!req.body?.id_user) throw "Id User Required"
        } catch (error) {
            return Responses.badRequest(res, error, next);
        }

        try {
            const payload = {
                id_user: req.body.id_user,
                q1: req.body?.q1,
                q2: req.body?.q2,
                q3: req.body?.q3,
                q4: req.body?.q4,
                q5: req.body?.q5,
                q6: req.body?.q6,
                q7: req.body?.q7,
                q8: req.body?.q8,
                q9: req.body?.q9,
            } as PayloadDepresi

            const Result = await this.depresiService.create(payload);
            Responses.success(res, Result);
        } catch (error) {
            return Responses.failed(res, error, next)
        }
    }
}

export default Depresi;