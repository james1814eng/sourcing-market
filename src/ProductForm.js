// src/ProductForm.js
import React from "react";
import "./App.css";

function ProductForm() {
  return (
    <div className="form-container">
      <h2>상품 등록</h2>
      <input type="text" placeholder="상품명" />
      <input type="text" placeholder="가격 (예: ₩10,000)" />
      <input type="text" placeholder="URL (예: https://yourstore.com)" />
      <input type="text" placeholder="이미지 URL" />
      <textarea placeholder="상품 설명"></textarea>
      <textarea placeholder="상품 용도"></textarea>
      <input type="text" placeholder="회사 명" />
      <input type="text" placeholder="담당자 연락처" />
      <select>
        <option value="판매중">판매중</option>
        <option value="품절">품절</option>
      </select>
      <button className="add-product-button">추가</button>
    </div>
  );
}

export default ProductForm;
