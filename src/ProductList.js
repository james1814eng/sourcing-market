// src/ProductList.js
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "신규 상품 A",
      price: "₩12,000",
      status: "판매중",
      description: "신규 상품 A의 간단한 설명입니다.",
      usage: "일반 용도",
      company: "좋은 느낌",
      contact: "000-000-0000",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "신규 상품 B",
      price: "₩8,500",
      status: "품절",
      description: "신규 상품 B의 간단한 설명입니다.",
      usage: "가정 용도",
      company: "편리한 느낌",
      contact: "111-111-1111",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.status}</p>
          <p>{product.description}</p>
          <p>용도: {product.usage}</p>
          <p>회사: {product.company}</p>
          <p>연락처: {product.contact}</p>
          <Link to="/add" className="add-product-button">
            상품 등록하기
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
