'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductDetail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            ProductDetail.belongsTo(models.Product, {
                foreignKey: 'productId',
            });
        }
    }
    ProductDetail.init(
        {
            description: DataTypes.TEXT('long'),
            contentMarkdown: DataTypes.TEXT('long'),
            productId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'ProductDetail',
            tableName: 'ProductDetail',
            freezeTableName: true,
        },
    );
    return ProductDetail;
};
