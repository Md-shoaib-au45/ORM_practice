const Models = require('models');

class Question {
  create = async (req, res) => {
    try {
      const {
        question_title,
        question_description,
        option_1,
        option_2,
        option_3,
        option_4,
        correct_answer,
      } = req.body;

      if (!question_title) {
        throw {
          message: 'Question title is required',
        };
      }

      const response = await Models.questions.create({
        question_title,
        question_description,
        option_1,
        option_2,
        option_3,
        option_4,
        correct_answer,
      });
      res.send({
        status: true,
        response: response,
        message: 'Successfully Created a Question',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getAllQues = async (req, res) => {
    try {
      const response = await Models.questions.findAll();
      res.send({
        status: true,
        response: response,
        message: 'Successfully get all todos',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getOneTodo = async (req, res) => {
    try {
      const { id } = req.query;
      const response = await Models.questions.findOne({
        where: { id: id },
      });
      res.send({
        status: true,
        response: response,
        message: 'Successfully get one todo',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  deleteQuestion = async (req, res) => {
    const { id } = req.body;
    try {
      const response = await Models.questions.update({ where: { id: id } });
      res.send({
        status: true,
        reponse: response,
        message: 'Successfully deleted user',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };
}

module.exports = new Question();
