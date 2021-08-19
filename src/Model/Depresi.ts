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
    q10: number;
    q11: number;
    q12: number;
    q13: number;
    q14: number;
    q15: number;
    q16: number;
    q17: number;
    q18: number;
    q19: number;
    q20: number;
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
        q10!: number;
        q11!: number;
        q12!: number;
        q13!: number;
        q14!: number;
        q15!: number;
        q16!: number;
        q17!: number;
        q18!: number;
        q19!: number;
        q20!: number;

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
        q10: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        q11: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        q12: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        q13: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        q14: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        q15: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        q16: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        q17: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        q18: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        q19: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        q20: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'Depresi',
    });
    return Depresi;
};