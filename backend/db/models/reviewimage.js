'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReviewImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ReviewImage.belongsTo(models.Review, {
        foreignKey: 'reviewId'
      })
    }
  }
  ReviewImage.init({
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Review'
      }
    },
    url: {
      type: DataTypes.STRING,
      // unique: true,
      validate: {
        isUrl: true,
      }
    },
  }, {
    sequelize,
    modelName: 'ReviewImage',
    // defaultScope: {
    //   attributes: {
    //     exclude: ['reviewId']
    //   }
    // },
    // scopes: {
    //   urlIdAttributes: {
    //     attributes: {
    //       exclude: ['reviewId', 'createAt', 'updatedAt']
    //     }
      // }
    // }
  });
  return ReviewImage;
};