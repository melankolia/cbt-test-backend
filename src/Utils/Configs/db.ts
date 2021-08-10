import { Sequelize, Options } from "sequelize";

const sequelize = new Sequelize('cbt_test', 'root', 'Welcome1!', { dialect: 'mysql', host: "localhost" } as Options);

export default sequelize;