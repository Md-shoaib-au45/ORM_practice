const router = require('express').Router();
const User = require('../controller/userContoller');
const Todo = require('../controller/todoController');

router.post('/users', User.create);
router.get('/users', User.getAllUsers);
router.put('/update_user', User.updateUser);
router.delete('/delete_user', User.deleteUser);


router.post('/todos', Todo.create);
router.get('/todos', Todo.getAllTodo);
router.put('/todos', Todo.updateUser);
router.delete('/todos', Todo.deleteUser);

router.get('/single-todo', Todo.getOneTodo);
router.get('/single-todo/:id', Todo.getOneTodoUsingParams);

module.exports = router;
