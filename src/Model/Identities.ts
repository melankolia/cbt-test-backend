import { Model, UUIDV4 } from "sequelize";

interface IdentitiesAttributes {
    id: string;
    id_user: string;
    name: string;
    age: number;
    gender: string;
    is_pregnant: boolean;
    education: string;
    additional_field: string,
    marital_status: string;
    job: string;
    hospital_sheet: string;
    is_covid19: string;
    frequencies: string;
};

module.exports = (sequelize: any, DataTypes: any) => {
    class Identities extends Model<IdentitiesAttributes>
        implements IdentitiesAttributes {
        id!: string;
        id_user!: string;
        name!: string;
        age!: number;
        gender!: string;
        is_pregnant!: boolean;
        education!: string;
        additional_field!: string;
        marital_status!: string;
        job!: string;
        hospital_sheet!: string;
        is_covid19!: string;
        frequencies!: string;

        static associate(models: any) {
            Identities.belongsTo(models.Users),
                { foreignKey: 'id_user', targetKey: 'id' }
        }
    };

    Identities.init({
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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_pregnant: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        education: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        additional_field: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        marital_status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        job: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hospital_sheet: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_covid19: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        frequencies: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            sequelize,
            modelName: 'Identities'
        })

    return Identities;
}