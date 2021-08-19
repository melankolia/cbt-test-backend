import db from "../../../Utils/Configs/db";
import { PayloadCreatePracticeSection, CBT_PracticeSection } from "./index.d";

class PracticeSection implements CBT_PracticeSection {
    public async create(payload: PayloadCreatePracticeSection): Promise<any> {
        try {
            const CBT_PracticeSection = await db.CBT_PracticeSection.findOne({
                where: {
                    id_user: payload.id_user
                }
            });
            if (CBT_PracticeSection) {
                await db.CBT_PracticeSection.update(
                    payload,
                    { where: { id_user: payload.id_user } })
            } else await db.CBT_PracticeSection.create(payload)

            return true;
        } catch (error) {
            throw error
        }
    }
};

export default PracticeSection;