"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    
    static associate(models) {
      Order.hasMany(models.OrderDetail, {
        foreignKey: "orderId",
        as: "orderDetail",
      });
    }
  }
  Order.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      addressDetail: DataTypes.STRING,
      note: DataTypes.STRING,
      totalMoney: DataTypes.STRING,
      paymentType: DataTypes.STRING,
      deliveryType: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      status: DataTypes.STRING,
      province: DataTypes.STRING,
      district: DataTypes.STRING,
      ward: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
