const { User } = require("../db");
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

require("dotenv").config();

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ where: { userName } });
    if (!userName || !password) {
      throw new Error("Faltan campos");
    }
    if (!user) {
      throw new Error("Error al iniciar sesión");
    }

    const loginSucces = await bcryptjs.compare(password, user.password)
    if (!loginSucces) {
      throw new Error("Error al iniciar sesión");
    }

    const token = jsonwebtoken.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATED })

    const cookie = {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
      path: "/"
    }
console.log("entró");

    res.json({ token, user, cookie })
  } catch (error) {
    console.error("ERROR POST /post:", error);
  }

};

module.exports = login;
