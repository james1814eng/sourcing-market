import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: '신규 상품 A',
      price: '₩12,000',
      status: '판매중',
      url: 'https://yourstore.com/product-a',
      image: 'https://via.placeholder.com/150',
      description: '신규 상품 A의 간단한 설명입니다.',
      usage: '일반 용도',
      company: '좋은 느낌',
      contact: '000-000-0000',
    },
    {
      id: 2,
      name: '신규 상품 B',
      price: '₩8,500',
      status: '품절',
      url: 'https://yourstore.com/product-b',
      image: 'https://via.placeholder.com/150',
      description: '신규 상품 B의 간단한 설명입니다.',
      usage: '가정 용도',
      company: '편리한 느낌',
      contact: '111-111-1111',
    },
  ]);

  return (
    <Router>
      <Routes>
        {/* 메인 페이지 */}
        <Route
          path="/"
          element={
            <div className="landing">
              <h1>소싱마켓</h1>
              <p>온라인 판매자와 제조업체를 연결하는 최적의 플랫폼</p>
              <Link to="/products">
                <button className="start-button">시작하기</button>
              </Link>
            </div>
          }
        />
        
        {/* 상품 리스트 페이지 */}
        <Route
          path="/products"
          element={
            <div className="container">
              <h1>소싱마켓 - 신규 상품 리스트</h1>
              <div className="product-list">
                {products.map((product) => (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                    <p>{product.status}</p>
                    <p>{product.description}</p>
                    <p>용도: {product.usage}</p>
                    <p>회사: {product.company}</p>
                    <p>연락처: {product.contact}</p>
                    <a href={product.url} target="_blank" rel="noopener noreferrer">
                      더 보기
                    </a>
                  </div>
                ))}
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
