import db from "../../Utils/Configs/db";
import { SurveyService, PayloadSurveys } from "./index.d";

class Surveys implements SurveyService {
    public async findOne(id_user: string): Promise<any> {
        try {
            const Identities = await db.Survey.findOne({
                where: { id_user },
                attributes: {
                    exclude: ['id']
                }
            })

            if (!Identities) throw "Data Not Found"

            return Identities
        } catch (error) {
            throw error
        }
    }

    public async create(payload: PayloadSurveys): Promise<any> {
        try {
            const Surveys = await db.Survey.findOne({
                where: {
                    id_user: payload.id_user
                }
            });
            if (Surveys) {
                await db.Surveys.update(
                    payload,
                    { where: { id_user: payload.id_user } })
            } else await db.Survey.create(payload)

            return true
        } catch (error) {
            throw error
        }
    }
}

export default Surveys;