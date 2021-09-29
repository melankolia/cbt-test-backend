import db from "../../Utils/Configs/db";
import { IdentitiesService, PayloadIdentities } from "./index.d";

class Identities implements IdentitiesService {
    public async findOne(id_user: string): Promise<any> {
        try {
            const Identities = await db.Identities.findOne({
                where: { id_user },
                attributes: {
                    exclude: ['UserId', 'id']
                }
            })

            if (!Identities) throw "Data Not Found"

            return Identities
        } catch (error) {
            throw error
        }
    }

    public async create(payload: PayloadIdentities): Promise<any> {
        try {
            const Identities = await db.Identities.findOne({
                where: {
                    id_user: payload.id_user
                }
            });
            if (Identities) {
                await db.Identities.update(
                    payload,
                    { where: { id_user: payload.id_user } })
            } else await db.Identities.create(payload)

            return true
        } catch (error) {
            throw error
        }
    }
}

export default Identities