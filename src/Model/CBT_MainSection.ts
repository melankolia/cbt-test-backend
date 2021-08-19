import { Model, UUIDV4 } from "sequelize";

interface CBT_MainSectionAttributes {
    id: string;
    id_user: string;
    step_11: string;
    step_12: string;
    step_13: string;
    step_14: string;
    step_15: string;
    step_16: string;
    step_17: string;
    step_18: string;
    step_19: number;
    step_20: number;

}

module.exports = (sequelize: any, DataTypes: any) => {
    class CBT_MainSection extends Model<CBT_MainSectionAttributes>
        implements CBT_MainSectionAttributes {
        id!: string;
        id_user!: string;
        step_11!: string;
        step_12!: string;
        step_13!: string;
        step_14!: string;
        step_15!: string;
        step_16!: string;
        step_17!: string;
        step_18!: string;
        step_19!: number;
        step_20!: number;

        static associate(models: any) {
            CBT_MainSection.belongsTo(models.Users,
                { foreignKey: 'id_user', targetKey: 'id' }
            )
        }
    };
    CBT_MainSection.init({
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
        step_11: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        step_12: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        step_13: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        step_14: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        step_15: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        step_16: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        step_17: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        step_18: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        step_19: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        step_20: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'CBT_MainSection'
    });
    return CBT_MainSection
}