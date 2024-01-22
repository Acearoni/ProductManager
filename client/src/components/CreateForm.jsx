import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateForm = (props) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");


    const submitHandler = (e) => {
        e.preventDefault()
        const newProduct = { title, price, description }
        axios.post('http://localhost:8000/api/createProduct', newProduct)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            //Axios error is the catch ERR
            //In order to get to the response of an error you would call err.response.
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title: </label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </div>

                <br />

                <div>
                    <label>Price: </label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} />
                </div>

                <br />

                <div>
                    <label>Description: </label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} />
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
}

export default CreateForm;
