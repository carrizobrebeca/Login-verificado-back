const { User } = require("../db");
const jsonwebtoken = require("jsonwebtoken");

const session = async (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token) return res.status(401).json({ message: "No autorizado" });

        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);

        const user = await User.findByPk(decoded.id);

        if (!user) return res.status(401).json({ message: "Usuario no encontrado" });

        res.json({
            id: user.id,
            name: user.name,
            userName: user.userName,
            email: user.email,
            isPrivate: user.isPrivate,
            city : user.city,
            image: user.image


        });

    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Token inválido o expirado" });
    }
};

module.exports = session;
