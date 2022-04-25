'use strict';

const Product = require('../models/product');

function getProduct(req, res) {
    let productId = req.params.productId;

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
        if (!product) return res.status(400).send({message: `El producto no existe `});

        res.status(200).send({product: product})
    });
};

function getProducts(req, res) {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`});
        if (!products) return res.status(404).send({message: "No existe ningun producto"});

        res.status(200).send({products: [products]});
    });
};

function saveProduct(req, res) {

    let product = new Product();
    product.name = req.body.name;
    product.picture = req.body.picture;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    product.save((err, productStored) => {
        if (err) res.status(500).send({message: `Error almacenar en la base de datos: ${err.message}`});
        res.status(200).send({message: productStored});
    });
}
function updateProduct(req, res) {
    let productId = req.params.productId;
    let update = req.body

    Product.findByIdAndUpdate(productId, update, (err, productUpdate) => {
        if (err) res.status(500).send({message: `Error al actualizar el producto: ${err}`});

        res.status(200).send({product: productUpdate});
    });
};

function deleteProduct(req, res) {
    let productId = req.params.productId;

    Product.findById(productId, (err, product) => {
        if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`});

        product.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`});
            res.status(200).send({message: "El producto fue eliminado"});
        })
    });
};

module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    saveProduct,
};
