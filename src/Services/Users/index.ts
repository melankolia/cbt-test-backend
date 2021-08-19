import db from "../../Utils/Configs/db";
import { UserService, PayloadUser, PayloadCreateUser } from "./index.d";

class User implements UserService {
    public async find(payload: PayloadUser): Promise<any> {
        try {
            const Users = await db.Users.findOne({
                where: {
                    username: payload.username,
                    password: payload.password
                },
                attributes: [
                    'id',
                    'name',
                    'username',
                    'createdAt',
                    'updatedAt'
                ]
            });

            if (!Users) throw "Invalid Username/Password"

            return Users;
        } catch (error) {
            throw error
        }
    }

    public async create(payload: PayloadCreateUser): Promise<any> {
        try {
            const User = await db.Users.findOne({
                where: {
                    username: payload.username,
                },
            })
            if (User) throw "Username Already Exists"

            const Result = await db.Users.create(payload);
            return Result;
        } catch (error) {
            if (error.name) throw error.errors[0].message;
            throw error
        }
    }

    public async findAll(): Promise<any> {
        try {
            const Users = await db.Users.findAll({
                attributes: {
                    exclude: ["id", "password"]
                },
                limit: 5,
                offset: 0
            })
            if (!Users) throw "Users Not Found"

            return Users;
        } catch (error) {
            throw error
        }
    }

    public async findOne(secureId: string): Promise<any> {
        try {
            const Users = await db.Users.findOne({
                where: {
                    id: secureId
                },
                attributes: {
                    exclude: ["password"]
                },
                include: [
                    {
                        model: db.Ansietas,
                        attributes: {
                            exclude: ['id_user', 'id']
                        }
                    },
                    {
                        model: db.Depresi,
                        attributes: {
                            exclude: ['id_user', 'id']
                        }
                    },
                    {
                        model: db.CBT_FirstSection,
                        attributes: {
                            exclude: ['id_user', 'id']
                        }
                    },
                    {
                        model: db.CBT_MainSection,
                        attributes: {
                            exclude: ['id_user', 'id']
                        }
                    },
                    {
                        model: db.CBT_PracticeSection,
                        attributes: {
                            exclude: ['id_user', 'id']
                        }
                    },
                ]
            })
            if (!Users) throw "Users Not Found"

            return Users;
        } catch (error) {
            throw error
        }
    }
};

export default User;