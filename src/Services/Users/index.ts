import db from "../../Utils/Configs/db";
import { UserService, PayloadUser, PayloadCreateUser } from "./index.d";

class User implements UserService {
    public async findAll(payload: PayloadUser): Promise<any> {
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
};

export default User;