import React from 'react'
import Home from '../pages/Home';
import Product from '../pages/Product';
import ProductDetail from '../pages/ProductDetail';
import Navbar from '../components/navbar/Navbar';
import { Layout } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Routing() {
  return (
    <>
    <Layout className = "layout">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/product' element={<Product></Product>} />
            <Route path='/product/:id' element= {<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </Layout>
    </>
  )
}

export default Routing
