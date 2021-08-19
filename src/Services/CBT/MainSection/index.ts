import db from "../../../Utils/Configs/db";
import { PayloadCreateMainSection, CBT_MainSection } from "./index.d";

class MainSection implements CBT_MainSection {
    public async create(payload: PayloadCreateMainSection): Promise<any> {
        try {
            const CBT_MainSection = await db.CBT_MainSection.findOne({
                where: {
                    id_user: payload.id_user
                }
            });
            if (CBT_MainSection) {
                await db.CBT_MainSection.update(
                    payload,
                    { where: { id_user: payload.id_user } })
            } else await db.CBT_MainSection.create(payload)

            return true;
        } catch (error) {
            throw error
        }
    }
};

export default MainSection;