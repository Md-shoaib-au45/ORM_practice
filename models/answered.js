'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class answered extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      answered.belongsTo(models.User, {
        foreignKey: 'user_id',
        targetKey: 'id',
      });
      answered.belongsTo(models.questions, {
        foreignKey: 'question_id',
        targetKey: 'id',
      });
    }
  }
  answered.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      question_id: { type: DataTypes.UUID, unique: true },
      user_id: DataTypes.UUID,
      user_answer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'answered',
    }
  );
  return answered;
};
