import { Model, UUIDV4 } from "sequelize";
import { any } from "sequelize/types/lib/operators";


interface SurveyAttributes {
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
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Survey extends Model<SurveyAttributes> implements SurveyAttributes {
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

        static associate(models: any) {
            Survey.belongsTo(models.Users,
                { foreignKey: 'id_user', targetKey: 'id' });
        }
    }

    Survey.init({
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
    }, {
        sequelize,
        modelName: 'Survey',
    });
    return Survey
}