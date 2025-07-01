const { User } = require('../db');

const getUser = async (name) => {

if(name){
   const users = await User.findAll({ where: name === name });
if (users.length === 0) {
      return res.status(404).json({ message: 'No se encontraron usuarios activos.' });
    } else {
      return res.status(200).json(users);
    }
  
} else{
  const users = await User.findAll();
  return users 
}
   
    
};

module.exports = getUser;
