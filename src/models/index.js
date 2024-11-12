import { Sequelize } from "sequelize";
import createUserModel from "./User";
import createRestaurantModel from "./Restaurant";
import createLikeRestaurantModel from "./LikeRestaurant";
import createRateRestaurantModel from "./RateRestaurant";
import createFoodTypeModel from "./FoodType";
import createFoodModel from "./Food";
import createOrderModel from "./Order";
import createSubFoodModel from "./SubFood";

const sequelize = new Sequelize("MySQL_db_app_food", "root", "1234", {
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

// Initial model
const User = createUserModel(sequelize);
const Restaurant = createRestaurantModel(sequelize);
const LikeRestaurant = createLikeRestaurantModel(sequelize);
const RateRestaurant = createRateRestaurantModel(sequelize);
const FoodType = createFoodTypeModel(sequelize);
const Food = createFoodModel(sequelize);
const Order = createOrderModel(sequelize);
const SubFood = createSubFoodModel(sequelize);

// User N -N Restaurant
//( mối quan hệ chính)
User.belongsToMany(Restaurant, {
  through: LikeRestaurant,
  foreignKey: "userId",
  as: "likedRestaurants",
});

Restaurant.belongsToMany(User, {
  through: LikeRestaurant,
  foreignKey: "resId",
  as: "likedUsers",
});

User.belongsToMany(Restaurant, {
  through: RateRestaurant,
  foreignKey: "userId",
  as: "ratedRestaurants",
});

Restaurant.belongsToMany(User, {
  through: RateRestaurant,
  foreignKey: "resId",
  as: "ratedUsers",
});

// Các mối quan hệ 1-1, 1-N phụ
// User 1 -N LikeRestaurant
User.hasMany(LikeRestaurant, {
  foreignKey: "userId",
  as: "likes",
});

// LikeRestaurant 1 - 1  User
LikeRestaurant.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

// User 1 -N RateRestaurant
User.hasMany(RateRestaurant, {
  foreignKey: "userId",
  as: "rates",
});

// RateRestaurant 1 - 1  User
RateRestaurant.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

// Restaurant 1 - N  LikeRestaurant
Restaurant.hasMany(LikeRestaurant, {
  foreignKey: "resId",
  as: "likes",
});

// LikeRestaurant 1 - 1  Restaurant
LikeRestaurant.belongsTo(Restaurant, {
  foreignKey: "resId",
  as: "restaurant",
});

// Restaurant 1 - N  RateRestaurant
Restaurant.hasMany(RateRestaurant, {
  foreignKey: "resId",
  as: "rates",
});

// RateRestaurant 1 - 1  Restaurant
RateRestaurant.belongsTo(Restaurant, {
  foreignKey: "resId",
  as: "restaurant",
});

// Mối quan hệ Food User , N - N
User.belongsToMany(Food, {
  through: Order,
  foreignKey: "userId",
  as: "orders",
});

Food.belongsToMany(User, {
  through: Order,
  foreignKey: "foodId",
  as: "users",
});

export {
  Food,
  FoodType,
  LikeRestaurant,
  Order,
  RateRestaurant,
  Restaurant,
  SubFood,
  User,
};
