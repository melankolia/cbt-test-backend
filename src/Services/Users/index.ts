import db from "../../Utils/Configs/db";
import { Op } from "sequelize";
import { UserService, PayloadUser, PayloadFindUsers, PayloadCreateUser, PayloadUpdateStatus } from "./index.d";

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
                    'firstLogin',
                    'status',
                    'createdAt',
                    'updatedAt',
                ]
            });

            if (!Users) throw "Invalid Username/Password"

            return Users;
        } catch (error) {
            throw error
        }
    }

    public async updateStatus(payload: PayloadUpdateStatus): Promise<any> {
        try {
            const User = await db.Users.update({
                status: payload.status,
                firstLogin: false
            },
                {
                    where: {
                        id: payload.id
                    }
                })
            const Result = await db.Users.findOne({
                where: {
                    id: payload.id,
                },
            })
            if (!Result) throw "User not found";
            return Result;
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

    public async findAll(payload: PayloadFindUsers): Promise<any> {
        try {
            const Users = await db.Users.findAll({
                where: {
                    [Op.or]: [
                        {
                            username: {
                                [Op.like]: `%${payload.search}%`
                            }
                        },
                        {
                            name: {
                                [Op.like]: `%${payload.search}%`
                            }
                        },
                        {
                            totalDepresi: {
                                [Op.like]: `%${payload.search}%`
                            }
                        },
                        {
                            totalAnsietas: {
                                [Op.like]: `%${payload.search}%`
                            }
                        }
                    ]
                },
                attributes: {
                    exclude: ["password"]
                },
                limit: 10,
                offset: payload.page >= 0 ? (payload.page * payload.limit) : 0,
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
                            exclude: ['id_user', 'id', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.Depresi,
                        attributes: {
                            exclude: ['id_user', 'id', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.CBT_FirstSection,
                        attributes: {
                            exclude: ['id_user', 'id', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.CBT_MainSection,
                        attributes: {
                            exclude: ['id_user', 'id', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.CBT_PracticeSection,
                        attributes: {
                            exclude: ['id_user', 'id', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.Survey,
                        attributes: {
                            exclude: ['id_user', 'id', 'createdAt', 'updatedAt']
                        }
                    },
                    {
                        model: db.Identities,
                        attributes: {
                            exclude: ['id_user', 'id', 'createdAt', 'updatedAt', 'UserId']
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