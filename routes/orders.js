const express = require('express');
const router = express.Router();

// Importa los arrays de users y products desde sus respectivos archivos
const { users } = require('./users');
const { products } = require('./products');

let possibleIdord=1;

let orders = [];

router.get('/', (req, res) => {
    res.json(orders);
});

router.get('/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }
    const id = parseInt(req.params.id);
    const order = orders.find(order => order.id === id);
    if (!order) {
        res.status(404).json({ error: 'Order not found' });
        return;
    }
    res.json(order);
});

router.post('/', (req, res) => {
    const order = req.body;
    if (!order.userId || !order.productId || !order.quantity || !order.status || isNaN(order.quantity) || order.quantity < 1) {
        res.status(400).json({ error: 'Order must have userId, productId, quantity, and status' });
        return;
    }
    if (!order.id) {
        order.id = possibleIdord;
        possibleIdord++;
    } else if (isNaN(order.id) || order.id < 1) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }

    // Verifica si el userId existe en el array de usuarios
    const user = users.find(user => user.id === order.userId);
    if (!user) {
        res.status(400).json({ error: 'Invalid userId' });
        return;
    }

    // Verifica si el productId existe en el array de productos
    const product = products.find(product => product.id === order.productId);
    if (!product) {
        res.status(400).json({ error: 'Invalid productId' });
        return;
    }

    orders.push(order);
    res.status(201).json(order);
});

module.exports = router;
