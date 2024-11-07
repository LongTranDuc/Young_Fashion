"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Cart.init(
    {
      userId: DataTypes.STRING,
      productId: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      sizeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};
