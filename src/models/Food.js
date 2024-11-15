import { DataTypes } from "sequelize";

export const createFoodModel = (sequelize) => {
  return sequelize.define(
    "Food",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "food_id",
      },

      foodName: {
        type: DataTypes.STRING(255),
        field: "food_name",
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING(255),
      },

      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      description: {
        type: DataTypes.STRING(255),
        field: "desc",
      },

      typeId: {
        type: DataTypes.INTEGER,
        field: "type_id",
      },
    },
    {
      timestamps: false,
      tableName: "foods",
    }
  );
};
