const User = require("../models/User.model");

exports.createUser = async (req, res) => {
    try {
        const { name, document, cellphone, city, address } = req.body;
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
        console.log("Usuario creado");
    } catch (error) {
        console.log("No se pudo crear el usuario");
        res.status(500).send(error);
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        console.log("No se pudo obtener los usuarios");
        res.status(500).send(error);
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { name, document, cellphone, city, address } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(user);
    } catch (error) {   
        console.log("No se pudo actualizar el usuario");
        res.status(500).send(error);
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).send(user);
        console.log("Usuario encontrado");
    } catch (error) {
        console.log("No se pudo obtener el usuario");
        res.status(404).send(error);
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndRemove({ _id: req.params.id });
        res.status(200).send(user);
        console.log("Usuario eliminado");
    }
    catch (error) {
        console.log("No se pudo eliminar el usuario");
        res.status(500).send(error);
    }
}
