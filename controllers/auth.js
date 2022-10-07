const jwt = require("jsonwebtoken");
const Usuario = require("../models/auth");
const bcrypt = require("bcryptjs");

//registers the user with the data sent

const register = async (req, res) => {
  const { nombres, apellidos, edad, correo, password } = req.body;
  try {
    const usuario = await Usuario.create({
      nombres,
      apellidos,
      edad,
      correo,
      password: bcrypt.hashSync(password, 8),
    });
    res.status(201).json({
      message: "Usuario creado correctamente",
      usuario,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el usuario",
      error,
    });
  }
};

//login the user with the data sent
const login = async (req, res) => {
  const { correo, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { correo } });
    if (!usuario) {
      res.status(404).json({
        message: "Usuario no encontrado",
      });
    } else {
      const passwordIsValid = bcrypt.compareSync(password, usuario.password);
      if (!passwordIsValid) {
        res.status(401).json({
          message: "El usuario o la contraseña son incorrectos",
        });
      } else {
        const token = jwt.sign(
          {
            id: usuario.id,
            nombres: usuario.nombres,
            apellidos: usuario.apellidos,
            edad: usuario.edad,
            correo: usuario.correo,
            activo: usuario.activo,
            create: usuario.createdAt,
          },
          process.env.SECRET,
          {
            expiresIn: 86400,
          }
        );
        res.status(200).json({
          message: "Login correcto",
          usuario,
          token,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al iniciar sesión",
      error,
    });
  }
};

//exports the functions
module.exports = { register, login };
