import { Request, Response, NextFunction } from "express";
import IdentitiesService from "../../Services/Identities";
import Responses from "../../Utils/Helper/Response";
import { PayloadIdentities } from "../../Services/Identities/index.d";

class Identities {
    identitiesService: IdentitiesService;

    constructor() {
        this.identitiesService = new IdentitiesService();
    }

    public async findOne(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            if (!req.params?.id_user) throw "Id User Required"
        } catch (error) {
            return Responses.badRequest(res, error, next);
        }

        try {
            const Result = await this.identitiesService.findOne(req.params.id_user as string)
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
                name: req.body?.name,
                age: req.body?.age,
                gender: req.body?.gender,
                is_pregnant: req.body?.is_pregnant,
                education: req.body?.education,
                marital_status: req.body?.marital_status,
                job: req.body?.job,
                additional_field: req.body.additional_field,
                hospital_sheet: req.body?.hospital_sheet,
                is_covid19: req.body?.is_covid19,
                frequencies: req.body?.frequencies,
            } as PayloadIdentities;

            const Result = await this.identitiesService.create(payload)
            Responses.success(res, Result);
        } catch (error) {
            return Responses.failed(res, error, next)
        }
    }
}

export default Identities;