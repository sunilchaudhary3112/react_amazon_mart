import express from 'express';
import data from './data';
import mongoose from "mongoose";
import userRoute from './routes/userRoute';

const mongodbUrl = 'mongodb+srv://sunil:Super123@cluster0-h3mdq.mongodb.net/amazon_db?retryWrites=true&w=majority';
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true
}).catch(error => console.log(error.reason));

const app = express();

app.use("/api/users", userRoute);

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