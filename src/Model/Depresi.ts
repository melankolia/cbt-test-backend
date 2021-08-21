import { Model, UUIDV4 } from "sequelize";

interface DepresiAttributes {
  id: string;
  id_user: string;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
  q6: number;
  q7: number;
  q8: number;
  q9: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Depresi extends Model<DepresiAttributes>
    implements DepresiAttributes {
    id!: string;
    id_user!: string;
    q1!: number;
    q2!: number;
    q3!: number;
    q4!: number;
    q5!: number;
    q6!: number;
    q7!: number;
    q8!: number;
    q9!: number;

    static associate(models: any) {
      Depresi.belongsTo(models.Users,
        { foreignKey: 'id_user', targetKey: 'id' }
      )
    }

  };
  Depresi.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
    },
    q1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    q2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    q3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    q4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    q5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    q6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    q7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    q8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    q9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Depresi',
  });
  return Depresi;
};