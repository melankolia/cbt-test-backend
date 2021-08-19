import db from "../../../Utils/Configs/db";
import { PayloadCreateFirstSection, CBT_FirstSection } from "./index.d";

class FirstSection implements CBT_FirstSection {
    public async create(payload: PayloadCreateFirstSection): Promise<any> {
        try {
            const CBT_FirstSection = await db.CBT_FirstSection.findOne({
                where: {
                    id_user: payload.id_user
                }
            });
            if (CBT_FirstSection) {
                await db.CBT_FirstSection.update(
                    payload,
                    { where: { id_user: payload.id_user } })
            } else await db.CBT_FirstSection.create(payload)

            return true;
        } catch (error) {
            throw error
        }
    }
};

export default FirstSection;