// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/products">신규 상품 리스트</Link>
          <Link to="/add">상품 등록하기</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
