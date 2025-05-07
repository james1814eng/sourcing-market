
import React, { useState } from 'react';
import './App.css';

function App() {
    const [products, setProducts] = useState([
        { id: 1, name: "신규 상품 A", price: "₩12,000", status: "판매중" },
        { id: 2, name: "신규 상품 B", price: "₩8,500", status: "품절" },
    ]);

    const [newProduct, setNewProduct] = useState({ name: "", price: "", status: "판매중" });
    const [filter, setFilter] = useState("전체"); // ✅ 필터 상태 추가

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newId = products.length + 1;
        setProducts([...products, { id: newId, ...newProduct }]);
        setNewProduct({ name: "", price: "", status: "판매중" });
    };

    const handleDeleteProduct = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
    };

    // ✅ 필터링된 상품 목록
    const filteredProducts = products.filter(product => {
        if (filter === "전체") return true;
        return product.status === filter;
    });

    return (
        <div style={{ padding: "30px", fontFamily: "Arial" }}>
            <h1 style={{ color: "#1e88e5" }}>소싱마켓 - 신규 상품 리스트</h1>

            <form onSubmit={handleAddProduct} style={{ marginTop: "20px", marginBottom: "30px" }}>
                <input name="name" value={newProduct.name} onChange={handleChange} placeholder="상품명" required />
                <input name="price" value={newProduct.price} onChange={handleChange} placeholder="가격 (예: ₩10,000)" required />
                <select name="status" value={newProduct.status} onChange={handleChange} style={{ marginLeft: "10px" }}>
                    <option value="판매중">판매중</option>
                    <option value="품절">품절</option>
                </select>
                <button type="submit" style={{ marginLeft: "10px" }}>추가</button>
            </form>

            {/* ✅ 필터링 버튼 추가 */}
            <div style={{ marginBottom: "20px" }}>
                <button onClick={() => setFilter("전체")} style={{ marginRight: "10px" }}>전체</button>
                <button onClick={() => setFilter("판매중")} style={{ marginRight: "10px" }}>판매중</button>
                <button onClick={() => setFilter("품절")}>품절</button>
            </div>

            <ul>
                {filteredProducts.map((p) => (
                    <li key={p.id} style={{ marginBottom: "10px" }}>
                        <strong>{p.name}</strong> / {p.price} / <span style={{ color: p.status === "판매중" ? "green" : "red" }}>{p.status}</span>
                        <button onClick={() => handleDeleteProduct(p.id)} style={{ marginLeft: "10px" }}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
