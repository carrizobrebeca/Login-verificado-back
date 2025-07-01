
const {Router} = require('express');
const usersRouter = require('./usersRouter');
const login = require('../Controllers/login');

const router = Router();
router.use("/users", usersRouter);
router.post("/login", login);
 module.exports = router;

 