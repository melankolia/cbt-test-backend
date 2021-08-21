import db from "../../Utils/Configs/db";
import { DepresiService, PayloadDepresi } from "./index.d";

class Depresi implements DepresiService {
    public async findAll(): Promise<any> {
        try {
            const Depresi = await db.Depresi.findAll({
                include: [
                    {
                        model: db.Users,
                        attributes: ["name", "username", "createdAt", "updatedAt"]
                    }
                ],
            });
            if (!Depresi) throw "Data Not Found"

            return Depresi;
        } catch (error) {
            throw error;
        }
    }

    public async findOne(id_user: string): Promise<any> {
        try {
            const Depresi = await db.Depresi.findOne({
                where: {
                    id_user
                },
                attributes: {
                    exclude: ["id"]
                }
            })
            if (!Depresi) throw "Data Not Found"

            return Depresi;
        } catch (error) {
            throw error;
        }
    }

    public async create(payload: PayloadDepresi): Promise<any> {
        try {
            const Depresi = await db.Depresi.findOne({
                where: {
                    id_user: payload.id_user
                }
            });
            if (Depresi) {
                await db.Depresi.update(
                    payload,
                    { where: { id_user: payload.id_user } })
            } else await db.Depresi.create(payload)

            return true;
        } catch (error) {
            if (error.name == "SequelizeForeignKeyConstraintError") throw "Id User Not Found"
            throw error;
        }
    }
}

export default Depresi;