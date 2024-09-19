const express = require('express');
const router = express.Router(); 

let products = [];

let possibleId=1;

router.get('/', (req, res) => {
    res.json(products);
});



router.post('/', (req, res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.category || isNaN(product.price)) {
        res.status(400).json({ error: 'Product must have a name, price, and category' });
        return;
    }
    if (typeof product.name !== 'string') {
        res.status(400).json({ error: 'Name must be a string' });
        return;
    }
    if (typeof product.price !== 'number' || isNaN(product.price)) {
        res.status(400).json({ error: 'Price must be a valid number' });
        return;
    }
    if (typeof product.category !== 'string') {
        res.status(400).json({ error: 'Category must be a string' });
        return;
    }if (!product.id) {
        product.id = possibleId;
        possibleId++;
    }else if(isNaN(product.id) || products.id<1){
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }
    const existingProduct = products.find(u => u.id === product.id);
    if (existingProduct) {
        res.status(400).json({ error: 'Product ID already exists' });
        return;
    }
    products.push(product);
    res.status(201).json(product);
});

router.get('/:id', (req, res) => {
    
    if(isNaN(req.params.id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }
    const id = parseInt(req.params.id);
    const product = products.find(product => product.id === id);
    if (!product) {
        res.status(404).json({ error: 'Product not found' });
        return;
    }
    res.json(product);
});

router.put('/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) {
        res.status(404).json({ error: 'Product not found' });
        return;
    }
    const product = req.body;
    if (!product.name) product.name = products[productIndex].name;
    if (!product.category) product.category = products[productIndex].category;
    if (!product.price) product.price = products[productIndex].price;
    if(!product.id) product.id = products[productIndex].id;
    products[productIndex] = product;
    res.json(product);
    console.log(products.length);
});

router.delete('/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        res.status(400).json({ error: 'Invalid ID' });
        return;
    }
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) {
        res.status(404).json({ error: 'User not found' });
        return;
    }
    products = products.filter(product => product.id !== id);
    res.json({ message: 'User deleted successfully' });
});
module.exports = {router, products};