import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const DisplayAll = (props) => {
    const { productList, setProductList } = props;
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/allProducts')
            .then((response) => {
                console.log(response.date);
                setProductList(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [setProductList]);

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <>
            {productList.map((productSchema) => (
                // Using ._id instead of indx since we're using a database.
                <div key={productSchema._id}>
                    <h2>{productSchema.title}</h2>
                    <h2>{productSchema.description}</h2>
                    <h2>{productSchema.price}</h2>
                    <Link to={`/product/${productSchema._id}`}>Details</Link>
                    <Link to={`/editProduct/${productSchema._id}`}>Edit</Link>
                    <button onClick={() => deleteHandler(productSchema._id)}>Delete</button>
                </div>
            ))}
        </>
    );
};


export default DisplayAll;
