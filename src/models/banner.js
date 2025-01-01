"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Banner.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.BLOB('long'),
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Banner",
      tableName: 'Banner', 
      freezeTableName: true,
    }
  );
  return Banner;
};
