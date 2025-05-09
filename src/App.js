import React, { useState } from 'react';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        url: '',
        image: '',
        description: '',
        features: '',
        status: '판매중',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newId = products.length + 1;
        setProducts([...products, { id: newId, ...newProduct }]);
        setNewProduct({
            name: '',
            price: '',
            url: '',
            image: '',
            description: '',
            features: '',
            status: '판매중',
        });
    };

    return (
        <div className="container">
            <div className="header-stripe">
                온라인 판매자와 제조업체를 연결하는
            </div>
            <h1>소싱마켓 - 신규 상품 리스트</h1>
            <form onSubmit={handleAddProduct} className="product-form">
                <input name="name" placeholder="상품명" value={newProduct.name} onChange={handleChange} />
                <input name="price" placeholder="가격 (예: ₩10,000)" value={newProduct.price} onChange={handleChange} />
                <input name="url" placeholder="URL (예: https://yourstore.com)" value={newProduct.url} onChange={handleChange} />
                <input name="image" placeholder="이미지 URL" value={newProduct.image} onChange={handleChange} />
                <textarea name="description" placeholder="상품 설명" value={newProduct.description} onChange={handleChange} />
                <textarea name="features" placeholder="상품 특성" value={newProduct.features} onChange={handleChange} />
                <select name="status" value={newProduct.status} onChange={handleChange}>
                    <option value="판매중">판매중</option>
                    <option value="품절">품절</option>
                </select>
                <button type="submit">추가</button>
            </form>
            <div className="product-list">
                {products.map((product) => (
                    <a 
                        href={product.url.startsWith('http') ? product.url : `https://${product.url}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="product-card" 
                        key={product.id}
                    >
                        {product.image && <img src={product.image} alt={product.name} />}
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <p className={product.status === "품절" ? "sold-out" : "on-sale"}>{product.status}</p>
                        <p>{product.description}</p>
                        <p>{product.features}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default App;
