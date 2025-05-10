// src/App.js
import React, { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const url = event.target.elements.url.value;
    const description = event.target.elements.description.value;
    const usage = event.target.elements.usage.value;
    const company = event.target.elements.company.value;
    const contact = event.target.elements.contact.value;
    const status = event.target.elements.status.value;

    if (!name || !price || !url) {
      alert("상품명, 가격, URL은 필수입니다.");
      return;
    }

    const newProduct = {
      name,
      price,
      url,
      description,
      usage,
      company,
      contact,
      status,
    };

    setProducts([...products, newProduct]);
    event.target.reset(); // 폼 초기화
  };

  return (
    <div>
      <h1>소싱마켓 - 신규 상품 리스트</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="상품명" />
        <input name="price" placeholder="가격 (예: ₩10,000)" />
        <input name="url" placeholder="URL (예: https://yourstore.com)" />
        <input name="description" placeholder="상품 설명" />
        <input name="usage" placeholder="상품 용도" />
        <input name="company" placeholder="회사 명" />
        <input name="contact" placeholder="담당자 연락처" />
        <select name="status">
          <option value="판매중">판매중</option>
          <option value="품절">품절</option>
        </select>
        <button type="submit">추가</button>
      </form>

      <div>
        {products.map((product, index) => (
          <div key={index}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.url}</p>
            <p>{product.description}</p>
            <p>{product.usage}</p>
            <p>{product.company}</p>
            <p>{product.contact}</p>
            <p>{product.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
