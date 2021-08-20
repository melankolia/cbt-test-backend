import e, { Request, Response, NextFunction } from "express";
import Responses from "../../../Utils/Helper/Response";
import { PayloadCreateMainSection } from "../../../Services/CBT/MainSection/index.d";
import CBT_MainSection from "../../../Services/CBT/MainSection";


class MainSection {
    cbt_MainSection: CBT_MainSection;

    constructor() {
        this.cbt_MainSection = new CBT_MainSection();
    }

    public async create(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            if (!req.body?.id_user) throw "Id User Required"
        } catch (error) {
            return Responses.badRequest(res, error, next);
        }

        try {
            const payload = {
                id_user: req.body?.id_user,
                step_11: req.body?.step_11,
                step_12: req.body?.step_12,
                step_13: req.body?.step_13,
                step_14: req.body?.step_14,
                step_15: req.body?.step_15,
                step_16: req.body?.step_16,
                step_17: req.body?.step_17,
                step_18: req.body?.step_18,
                step_19: req.body?.step_19,
                step_20: req.body?.step_20
            } as PayloadCreateMainSection;

            const Result = await this.cbt_MainSection.create(payload);
            Responses.success(res, Result);

        } catch (error) {
            return Responses.failed(res, error, next)
        }
    }
}

export default MainSection;