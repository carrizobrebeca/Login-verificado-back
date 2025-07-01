const { User } = require("../db");
const bcryptjs = require('bcryptjs');
const user = async (name, userName, email, city, password, image) => {
const existingUser = await User.findOne({ where: { userName } });
const existingEmail = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("Nombre de usuario ya registrado");
  }
    if (existingEmail) {
    throw new Error("Email ya registrado");
  }

  const salt = await bcryptjs.genSalt(5)
  const hashPassword = await bcryptjs.hash(password, salt)
  return await User.create({
    name,
    userName,
    email,
    city,
    password: hashPassword,
    image,
  });

};

module.exports = user;
