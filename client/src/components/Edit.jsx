import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    useEffect(() => {
        // Fetch the product data by ID when the component mounts
        axios.get(`http://localhost:8000/api/findOneProduct/${id}`)
            .then((res) => {
                const { title, description, price } = res.data;
                setTitle(title);
                setDescription(description);
                setPrice(price);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault();
        const updatedProduct = { title, description, price };

        axios.put(`http://localhost:8000/api/updateProduct/${id}`, updatedProduct)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={submitHandler}>
                <label>Title: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />

                <label>Description: </label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <br />
                
                <label>Price: </label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                <br />

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default Edit;
