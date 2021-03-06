import React from 'react';
import { Link } from "react-router-dom";
// import data from '../data';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { detailsProduct } from '../actions/productAction';
import { useState } from 'react';

function ProductScreen(props) {
    // console.log(props.match.params.id);
    // const product = data.products.find(x => x._id === props.match.params.id)

    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        //effect
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //cleanup
        };
    }, []);

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

    return <div >
        <div className="back-to-result">
            <Link to="/">Back to results</Link>
        </div>
        {loading ? <div>Loading...</div> :
            error ? <div>{error}</div> :
                (
                    <div className="details">
                        <div className="details-image">
                            <img src={product.image} alt="product" />
                        </div>
                        <div className="details-info">
                            <ul>
                                <li>
                                    <h4>{product.name}</h4>
                                </li>
                                <li>
                                    {product.rating} Stars ({product.numReviews} Reviews)
                    </li>
                                <li>
                                    Price: <b>${product.price}</b>
                                </li>
                                <li>
                                    Description:
                        <div>
                                        {product.description}
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="details-action">
                            <ul>
                                <li>
                                    Price: {product.price}
                                </li>
                                <li>
                                    Status: {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                                </li>
                                <li>
                                    QTY: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                        {[...Array(product.countInStock).keys()].map(x =>
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        )}
                                    </select>
                                </li>
                                <li>
                                    {/* {product.countInStock > 0 ? <button onClick={handleAddToCart} className="button primary">Add to Cart</button>
                                        : <div>Out of stocks</div>} */}
                                    {product.countInStock > 0 && <button onClick={handleAddToCart} className="button primary">Add to Cart</button>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                )
        }


    </div>
}

export default ProductScreen;