import { useState, useEffect } from 'react';
import './App.css';
import CreateForm from './components/CreateForm';
import DisplayAll from './components/DisplayAll';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import DisplayOne from './components/DisplayOne';
import Edit from './components/Edit';

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/allProducts')
      .then((response) => {
        setProductList(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);



// https://stackoverflow.com/questions/37342997/render-multiple-components-in-react-router reference for using multiple components.
// https://legacy.reactjs.org/docs/fragments.html for reference of what a fragment was. 

  return (
    <>
      <Routes>
        <Route path='/'element={
            <>
              <CreateForm />
              <DisplayAll productList={productList} setProductList={setProductList} />
            </>
          }
        />
        <Route path='/product/:id' element={<DisplayOne/>}/>
        <Route path='/editProduct/:id' element={<Edit/>}/>
      </Routes>
    </>
  );
}

export default App;
