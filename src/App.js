function App() {
    const [products, setProducts] = useState([
        { id: 1, name: "신규 상품 A", price: "₩12,000", status: "판매중" },
        { id: 2, name: "신규 상품 B", price: "₩8,500", status: "품절" },
        { id: 3, name: "테스트상품", price: "₩10,000", status: "판매중" },
    ]);

    return (
        <div className="container">
            <h1>소싱마켓 - 신규 상품 리스트</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <p className={product.status === "품절" ? "sold-out" : "on-sale"}>
                            {product.status}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
