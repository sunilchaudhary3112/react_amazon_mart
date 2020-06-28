import React, { useState, useEffect } from 'react';
// import data from '../data'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productAction';


function HomeScreen(props) {
    // const [products, setProduct] = useState([]);

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        // const fetchData = async () => {
        //     const { data } = await axios.get("/api/products");
        //     setProduct(data);
        // }
        // fetchData();
        dispatch(listProducts());
        return () => {
            //
        };
    }, [])


    return loading? <div>Loading...</div> :
    error? <div>{error}</div>:
    <ul className="products">
        {
            products.map(product =>
                <li key={product._id} className="product">
                    <Link to={'/product/' + product._id}>
                        <img className="product-image" src={product.image} alt="product"></img>
                    </Link>
                    <div className="product-name">
                        <Link to={'/product/' + product._id}>{product.name}</Link>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">{product.price}</div>
                    <div className="product-rating">{product.rating} Star {product.numReviews} Reviews</div>
                </li>
            )
        }

    </ul>
}

export default HomeScreen;