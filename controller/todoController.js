const Models = require('models');

class Todo {
  create = async (req, res) => {
    try {
      const { title, description, priority } = req.body;

      if (!title) {
        throw {
          message: 'Title is required',
        };
      }
      if (!description) {
        throw {
          message: 'Description is required',
        };
      }
      if (!priority) {
        throw {
          message: 'Priority is required',
        };
      }

      const response = await Models.Todo.create({
        title,
        description,
        priority,
      });
      res.send({
        status: true,
        response: response,
        message: 'Successfully Created a Todo',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getAllTodo = async (req, res) => {
    try {
      const response = await Models.Todo.findAll();
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
      const response = await Models.Todo.findOne({
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
  getOneTodoUsingParams = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await Models.Todo.findOne({
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

  updateUser = async (req, res) => {
    const { id, firstName, lastName, email } = req.body;
    try {
      const response = await Models.User.update(
        { firstName, lastName, email },
        { where: { id: id } }
      );
      res.send({
        status: true,
        reponse: response,
        message: 'Successfully updated users',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  deleteUser = async (req, res) => {
    const { id } = req.body;
    try {
      const response = await Models.Todo.destroy({ where: { id: id } });
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

module.exports = new Todo();
