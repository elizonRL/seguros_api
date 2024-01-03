const express = require('express');
const router = express.Router();

const clientes = [{ nombre: 'Juan', apellido: 'Perez', edad: 25}];

// Consultar un cliente o crear un cliente
router.route('/clientes')
    
    .post((req, res) => {
        const cliente = req.body;
        clientes.push(cliente);
        res.status(201).json({ message: 'Cliente registrado exitosamente' });
    })
    .get((req, res) => {
        res.json(clientes);
    })
    
// Modificar un cliente o eliminar un cliente
router.route('/clientes/:id')
    .get((req, res) => {
        const id = req.params.id;
        const cliente = clientes[id];
        res.json(cliente);
    })
    .put((req, res) => {
        const id = req.params.id;
        const clienteModificado = req.body;
        clientes[id] = clienteModificado;
        res.json({ message: 'Cliente modificado exitosamente' });
    })
    .delete((req, res) => {
        const id = req.params.id;
        clientes.splice(id, 1);
        res.json({ message: 'Cliente eliminado exitosamente' });
    })  

exports.router =  router ;
