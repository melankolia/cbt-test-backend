import db from "../../Utils/Configs/db";
import { AnsietasService, PayloadAnsietas } from "./index.d";

class Ansietas implements AnsietasService {
    public async findAll(): Promise<any> {
        try {
            const Ansietas = await db.Ansietas.findAll({
                include: [
                    {
                        model: db.Users,
                        attributes: ["name", "username", "createdAt", "updatedAt"]
                    }
                ],
            });
            if (!Ansietas) throw "Data Not Found"

            return Ansietas;
        } catch (error) {
            throw error;
        }
    }

    public async findOne(id_user: string): Promise<any> {
        try {
            const Ansietas = await db.Ansietas.findOne({
                where: {
                    id_user
                },
                attributes: {
                    exclude: ["id"]
                }
            })
            if (!Ansietas) throw "Data Not Found"

            return Ansietas;
        } catch (error) {
            throw error;
        }
    }

    public async create(payload: PayloadAnsietas): Promise<any> {
        try {
            const Ansietas = await db.Ansietas.findOne({
                where: {
                    id_user: payload.id_user
                }
            });
            if (Ansietas) {
                await db.Ansietas.update(
                    payload,
                    { where: { id_user: payload.id_user } })
            } else await db.Ansietas.create(payload)

            return true;
        } catch (error) {
            if (error.name == "SequelizeForeignKeyConstraintError") throw "Id User Not Found"
            throw error;
        }
    }
}

export default Ansietas;