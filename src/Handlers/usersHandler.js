const getUser = require("../Controllers/getUser");
const login = require("../Controllers/login");
const user = require("../Controllers/user");

const getUsersHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const result = name ? await getUser(name) : await getUser();
    res.status(200).json(result);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const postUsersHandler = async (req, res) => {
  const { name, userName, email,
    city, password, image } = req.body;

  try {
    const response = await user(name, userName, email,
      city, password, image);
    res.status(200).json(response);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsersHandler,
  postUsersHandler,
 
};
