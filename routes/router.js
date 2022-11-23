const router = require('express').Router();
const User = require('../controller/userContoller');
const Todo = require('../controller/todoController');
const Question = require('../controller/questionController');
const Answered = require('../controller/answeredController');

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

//Questions Routes
router.post('/questions', Question.create);
router.get('/questions', Question.getAllQues);
//Answered Routes
router.post('/answered', Answered.create);
router.get('/answered', Answered.getAllAnswered);

module.exports = router;
