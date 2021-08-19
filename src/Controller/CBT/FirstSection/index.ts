import e, { Request, Response, NextFunction } from "express";
import Responses from "../../../Utils/Helper/Response";
import { PayloadCreateFirstSection } from "../../../Services/CBT/FirstSection/index.d";
import CBT_FirstSection from "../../../Services/CBT/FirstSection";


class FirstSection {
    cbt_FirstSection: CBT_FirstSection;

    constructor() {
        this.cbt_FirstSection = new CBT_FirstSection();
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
                situasi: req.body?.situasi,
                pikiran: req.body?.pikiran,
                distorsi_pikiran: req.body?.distorsi_pikiran,
                perasaan: req.body?.perasaan,
                tingkatan_perasaan: req.body?.tingkatan_perasaan,
                perilaku: req.body?.perilaku,
                konsekuensi: req.body?.konsekuensi,
                paling_mengganggu: req.body?.paling_mengganggu,
            } as PayloadCreateFirstSection;

            const Result = await this.cbt_FirstSection.create(payload);
            Responses.success(res, Result);

        } catch (error) {
            return Responses.failed(res, error, next)
        }
    }
}

export default FirstSection;