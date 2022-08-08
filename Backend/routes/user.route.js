// Creamos las rutas para el modelo de usuario
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getUsers); // Obtener todos los usuarios
router.post('/', userController.createUser); // Crear un usuario
router.put('/:id', userController.updateUser); // Actualizar un usuario
router.get('/:id', userController.getUser); // Obtener un usuario
router.delete('/:id', userController.deleteUser); // Eliminar un usuario

module.exports = router;