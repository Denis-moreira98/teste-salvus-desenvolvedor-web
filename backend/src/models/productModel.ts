import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db";

class Product extends Model {
   public id!: string;
   public name!: string;
   public description!: string;
   public price!: string;
   public createdAt!: Date;
   public updatedAt!: Date;
}

Product.init(
   {
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      description: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      price: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   },
   {
      sequelize,
      tableName: "products",
      modelName: "Product",
      underscored: true,
   }
);

export default Product;
