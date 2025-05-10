import React, { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
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
  ]);

  return (
    <div className="container">
      <h1>소싱마켓 - 신규 상품 리스트</h1>
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
            <a href="/add" className="add-product-button">
              상품 등록하기
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
