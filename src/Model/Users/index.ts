import sequelize from "../../Utils/Configs/db";
import { Sequelize, Model, DataTypes } from "sequelize";

interface UserInstance extends Model {
    id: number;
    name: string;
}

const UserModel = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
});

export default UserModel;