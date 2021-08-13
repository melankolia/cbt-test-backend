import { Model, UUIDV4 } from "sequelize";

interface UserAttributes {
  id: string;
  name: string;
  username: string;
  password: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Users extends Model<UserAttributes>
    implements UserAttributes {
    id!: string;
    name!: string;
    username!: string;
    password!: string;

    static associate(models: any) {
      // define association here
    }

  };
  Users.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Users',
    hooks: {
      afterCreate: (record: any) => {
        delete record.dataValues.password;
      },
      afterUpdate: (record: any) => {
        delete record.dataValues.password;
      },
    }
  });
  return Users;
};