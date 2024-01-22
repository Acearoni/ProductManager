import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const DisplayOne = (props) => {
    const navigate = useNavigate();
    const [product, setproduct] = useState();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findOneProduct/${id}`)
            .then((res) => {
                setproduct(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    const deleteHandler = () => {
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

        <div>
            <h1>{product?.title}</h1>
            <h2>{product?.description}</h2>
            <h3>{product?.price}</h3>
            <button onClick={deleteHandler}>Delete {product?.setup} </button>
        </div>

    );

}

export default DisplayOne; 