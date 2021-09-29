import { Request, Response, NextFunction } from "express";
import SurveysService from "../../Services/Surveys";
import Responses from "../../Utils/Helper/Response";
import { PayloadSurveys } from "../../Services/Surveys/index.d";

class Surveys {
    surveysService: SurveysService;

    constructor() {
        this.surveysService = new SurveysService();
    }

    public async findOne(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            if (!req.params?.id_user) throw "Id User Required"
        } catch (error) {
            return Responses.badRequest(res, error, next);
        }

        try {
            const Result = await this.surveysService.findOne(req.params.id_user as string)
            Responses.success(res, Result);
        } catch (error) {
            return Responses.failed(res, error, next)
        }
    }

    public async create(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            if (!req.body?.id_user) throw "Id User Required";
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
                q10: req.body?.q10,
                q11: req.body?.q11,
                q12: req.body?.q12,
                q13: req.body?.q13,
                q14: req.body?.q14,
                q15: req.body?.q15,
            } as PayloadSurveys;

            const Result = await this.surveysService.create(payload)
            Responses.success(res, Result);
        } catch (error) {
            return Responses.failed(res, error, next)
        }
    }

}

export default Surveys;