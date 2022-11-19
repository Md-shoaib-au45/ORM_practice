const Models = require('models');

class User {
  create = async (req, res) => {
    try {
      const { firstName, lastName, email } = req.body;

      const response = await Models.User.create({
        firstName,
        lastName,
        email,
      });
      res.send({
        status: true,
        reponse: response,
        message: 'Successfully Created user',
      });
    } catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };

  getAllUsers = async (req, res) => {
    try {
      const response = await Models.User.findAll();
      res.send({
        status: true,
        reponse: response,
        message: 'Successfully get all users',
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
      const response = await Models.User.destroy(
        { where: { id: id } }
      );
      res.send({
        status: true,
        reponse: response,
        message: 'Successfully deleted user',
      });
    }
     catch (error) {
      res.send({
        status: false,
        response: error.message,
      });
    }
  };
}

module.exports = new User();
