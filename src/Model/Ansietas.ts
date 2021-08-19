import { Model, UUIDV4 } from "sequelize";

interface AnsietasAttributes {
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
  total: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Ansietas extends Model<AnsietasAttributes>
    implements AnsietasAttributes {
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
    total!: number;

    static associate(models: any) {
      Ansietas.belongsTo(models.Users,
        { foreignKey: 'id_user', targetKey: 'id' }
      )
    }

  };
  Ansietas.init({
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
    total: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Ansietas',
  });
  return Ansietas;
};