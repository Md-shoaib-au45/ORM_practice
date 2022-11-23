const Models = require('models');

class Answered {
  create = async (req, res) => {
    try {
      const { question_id, user_id, user_answer } = req.body;

      if (!question_id) {
        throw {
          message: 'question_id  is required',
        };
      }
      if (!user_id) {
        throw {
          message: 'user_id  is required',
        };
      }
      if (!user_answer) {
        throw {
          message: 'user_answer  is required',
        };
      }

      const response = await Models.answered.create({
        question_id,
        user_id,
        user_answer,
      });
      res.send({
        status: true,
        response: response,
        message: 'Successfully Created a answered',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getAllAnswered = async (req, res) => {
    try {
      const response = await Models.answered.findAll({
        include: [
          {
            model: Models.User,
          },
          {
            model: Models.questions,
          },
        ],
        order: [['createdAt', 'DESC']],
      });
      res.send({
        status: true,
        response: response,
        message: 'Successfully get all answered',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };
}

module.exports = new Answered();
