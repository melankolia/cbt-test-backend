import { Model, UUIDV4 } from "sequelize";

interface CBT_FirstSectionAttributes {
    id: string;
    id_user: string;
    situasi: string;
    pikiran: string;
    distorsi_pikiran: string;
    perasaan: string;
    tingkatan_perasaan: number;
    perilaku: string;
    konsekuensi: string;
    paling_mengganggu: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class CBT_FirstSection extends Model<CBT_FirstSectionAttributes>
        implements CBT_FirstSectionAttributes {
        id!: string;
        id_user!: string;
        situasi!: string;
        pikiran!: string;
        distorsi_pikiran!: string;
        perasaan!: string;
        tingkatan_perasaan!: number;
        perilaku!: string;
        konsekuensi!: string;
        paling_mengganggu!: string;

        static associate(models: any) {
            CBT_FirstSection.belongsTo(models.Users,
                { foreignKey: 'id_user', targetKey: 'id' }
            )
        }
    };
    CBT_FirstSection.init({
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
        situasi: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        pikiran: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        distorsi_pikiran: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        perasaan: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        tingkatan_perasaan: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        perilaku: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        konsekuensi: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        paling_mengganggu: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'CBT_FirstSection'
    });
    return CBT_FirstSection
}