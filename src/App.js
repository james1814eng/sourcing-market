// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>소싱마켓 - 신규 상품 리스트</h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
