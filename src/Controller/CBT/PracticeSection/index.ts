import e, { Request, Response, NextFunction } from "express";
import Responses from "../../../Utils/Helper/Response";
import { PayloadCreatePracticeSection } from "../../../Services/CBT/PracticeSection/index.d";
import CBT_PracticeSection from "../../../Services/CBT/PracticeSection";


class PracticeSection {
    cbt_PracticeSection: CBT_PracticeSection;

    constructor() {
        this.cbt_PracticeSection = new CBT_PracticeSection();
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
                step_21: req.body?.step_21,
                step_22: req.body?.step_22,
                step_23: req.body?.step_23,
                step_24: req.body?.step_24,
                step_25: req.body?.step_25,
                step_26: req.body?.step_26,
            } as PayloadCreatePracticeSection;

            const Result = await this.cbt_PracticeSection.create(payload);
            Responses.success(res, Result);

        } catch (error) {
            return Responses.failed(res, error, next)
        }
    }
}

export default PracticeSection;