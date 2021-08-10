import UserModel from "../../Model/Users";
import { UserService } from "./index.d";

class User implements UserService {
    // userModel: UserModel;
    // constructor() {
    //     this.userModel = UserModel;
    // }

    public async findAll(): Promise<any> {
        console.log("GOOD");
    }

    public async create(name: string): Promise<any> {
        try {
            const Users = await UserModel.create({ name });
            console.log(Users);
            return Users;
        } catch (error) {
            throw error
        }
    }
};

export default User;