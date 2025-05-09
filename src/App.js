import React, { useState } from 'react';
import './App.css';

function App() {
    const [products, setProducts] = useState([
        {
            id: 1, 
            name: "신규 상품 A", 
            price: "₩12,000", 
            status: "판매중", 
            url: "https://yourstore.com/product-a", 
            image: "https://via.placeholder.com/300", 
            description: "신규 상품 A의 간단한 설명입니다.", 
            features: "특징: 경량, 내구성, 편리함"
        },
        {
            id: 2, 
            name: "신규 상품 B", 
            price: "₩8,500", 
            status: "품절", 
            url: "https://yourstore.com/product-b", 
            image: "https://via.placeholder.com/300", 
            description: "신규 상품 B의 간단한 설명입니다.", 
            features: "특징: 합리적인 가격, 높은 품질"
        }
    ]);

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        status: "판매중",
        url: "",
        image: "",
        description: "",
        features: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newId = products.length + 1;
        setProducts([...products, { id: newId, ...newProduct }]);
        setNewProduct({ name: "", price: "", status: "판매중", url: "", image: "", description: "", features: "" });
    };

    return (
        <div className="container">
            <h1>소싱마켓 - 신규 상품 리스트</h1>

            <form onSubmit={handleAddProduct} className="product-form">
                <input 
                    type="text" 
                    name="name" 
                    value={newProduct.name} 
                    onChange={handleChange} 
                    placeholder="상품명" 
                    required 
                />
                <input 
                    type="text" 
                    name="price" 
                    value={newProduct.price} 
                    onChange={handleChange} 
                    placeholder="가격 (예: ₩10,000)" 
                    required 
                />
                <input 
                    type="text" 
                    name="url" 
                    value={newProduct.url} 
                    onChange={handleChange} 
                    placeholder="URL (예: https://yourstore.com)" 
                    required 
                />
                <input 
                    type="text" 
                    name="image" 
                    value={newProduct.image} 
                    onChange={handleChange} 
                    placeholder="이미지 URL" 
                    required 
                />
                <textarea 
                    name="description" 
                    value={newProduct.description} 
                    onChange={handleChange} 
                    placeholder="상품 설명" 
                    required 
                />
                <textarea 
                    name="features" 
                    value={newProduct.features} 
                    onChange={handleChange} 
                    placeholder="상품 특성" 
                    required 
                />
                <select 
                    name="status" 
                    value={newProduct.status} 
                    onChange={handleChange}
                >
                    <option value="판매중">판매중</option>
                    <option value="품절">품절</option>
                </select>
                <button type="submit">추가</button>
            </form>

            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <a href={product.url} target="_blank" rel="noopener noreferrer">
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                        </a>
                        <p>{product.price}</p>
                        <p className={product.status === "품절" ? "sold-out" : "on-sale"}>
                            {product.status}
                        </p>
                        <p>{product.description}</p>
                        <p>{product.features}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;


