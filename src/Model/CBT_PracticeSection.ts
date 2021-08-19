import { Model, UUIDV4 } from "sequelize";

interface CBT_PracticeSectionAttributes {
    id: string;
    id_user: string;
    step_21: string;
    step_22: string;
    step_23: string;
    step_24: string;
    step_25: string;
    step_26: string;

}

module.exports = (sequelize: any, DataTypes: any) => {
    class CBT_PracticeSection extends Model<CBT_PracticeSectionAttributes>
        implements CBT_PracticeSectionAttributes {
        id!: string;
        id_user!: string;
        step_21!: string;
        step_22!: string;
        step_23!: string;
        step_24!: string;
        step_25!: string;
        step_26!: string;

        static associate(models: any) {
            CBT_PracticeSection.belongsTo(models.Users,
                { foreignKey: 'id_user', targetKey: 'id' }
            )
        }
    };
    CBT_PracticeSection.init({
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
        step_21: {
            type: DataTypes.STRING,
            allowNull: true
        },
        step_22: {
            type: DataTypes.STRING,
            allowNull: true
        },
        step_23: {
            type: DataTypes.STRING,
            allowNull: true
        },
        step_24: {
            type: DataTypes.STRING,
            allowNull: true
        },
        step_25: {
            type: DataTypes.STRING,
            allowNull: true
        },
        step_26: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'CBT_PracticeSection'
    });
    return CBT_PracticeSection
}