import { Sequelize } from "sequelize";
// import {
//   HOST,
//   PORT,
//   USER,
//   PASSWORD,
//   DB,
//   dialect,
// } from "../configs/db.config.js";

const sequelize = new Sequelize("db_app_food", "root", "1234", {
  host: "localhost",
  port: 3307,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connect to database successful");
  })
  .catch((error) => {
    console.log("Fail to connect database ");
    throw error;
  });

export default sequelize;
