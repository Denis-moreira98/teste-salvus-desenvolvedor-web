import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
   process.env.DB_NAME as string,
   process.env.DB_USER as string,
   process.env.DB_PASSWORD as string,
   {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      dialect: "mysql",
      dialectOptions: {
         connectTimeout: 20000,
      },
   }
);

sequelize
   .authenticate()
   .then(() => {
      console.log("Connection has been established successfully.");
   })
   .catch((err) => {
      console.error("Unable to connect to the database:", err);
   });

export default sequelize;
