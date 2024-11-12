import { DataTypes } from "sequelize";

export const createFoodTypeModel = (sequelize) => {
  return sequelize.define(
    "FoodType",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "type_id",
      },

      typeName: {
        type: DataTypes.STRING(100),
        field: "type_name",
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "food_type",
    }
  );
};
