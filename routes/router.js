const router = require('express').Router();
const User = require('../controller/userContoller');

router.post('/users', User.create);
router.get('/users', User.getAllUsers);
router.put('/update_user', User.updateUser);
router.delete('/delete_user', User.deleteUser);

module.exports = router;
