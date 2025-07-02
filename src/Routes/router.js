
const {Router} = require('express');
const usersRouter = require('./usersRouter');
const login = require('../Controllers/login');
const session = require('../Controllers/session');

const router = Router();
router.use("/users", usersRouter);
router.post("/login", login);
router.get("/session", session);
 module.exports = router;

 