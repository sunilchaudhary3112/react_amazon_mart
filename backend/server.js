import express from 'express';
import data from './data';

const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products)
});


app.get("/api/product/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: "Product not found" });
    }
});


app.listen(5000, () => {
    console.log("server started at port 5000");
})