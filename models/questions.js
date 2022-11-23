'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       questions.hasMany(models.answered, {
         foreignKey: 'question_id',
         sourceKey: 'id',
       });
    }
  }
  questions.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      question_title: DataTypes.STRING,
      question_description: DataTypes.STRING,
      option_1: DataTypes.STRING,
      option_2: DataTypes.STRING,
      option_3: DataTypes.STRING,
      option_4: DataTypes.STRING,
      correct_answer: DataTypes.STRING,
      is_deleted:  {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'questions',
    }
  );
  return questions;
};
