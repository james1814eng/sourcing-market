// src/ProductForm.js
import React from 'react';

function ProductForm() {
  return (
    <div>
      <h2>상품 등록</h2>
      <form>
        <label>상품명</label>
        <input type="text" placeholder="상품명" />
        <label>가격</label>
        <input type="text" placeholder="예: ₩10,000" />
        <label>URL</label>
        <input type="text" placeholder="예: https://yourstore.com" />
        <label>이미지 URL</label>
        <input type="text" />
        <label>상품 설명</label>
        <textarea />
        <label>상품 용도</label>
        <textarea />
        <label>회사 명</label>
        <input type="text" />
        <label>담당자 연락처</label>
        <input type="text" />
        <button type="submit">추가</button>
      </form>
    </div>
  );
}

export default ProductForm;
