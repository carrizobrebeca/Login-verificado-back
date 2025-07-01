const { Router } = require("express");
const { getUsersHandler, postUsersHandler } = require("../Handlers/usersHandler");

const usersRouter = Router();

usersRouter.post("/", postUsersHandler);
usersRouter.get("/", getUsersHandler);
module.exports = usersRouter;
