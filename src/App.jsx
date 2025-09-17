function ProductItem({ name, price }) {
  return (
    <li>
      {name} - {price.toLocaleString()}원
    </li>
  );
}

function ProductList({ products }) {
  return (
    <div className="mx-10 my-10">
      <h1 className="text-xl font-bold  ">문제 1) 상품 목록</h1>
      <ul className="list-disc mt-6 ml-10">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const products = [
    { id: 1, name: '노트북', price: 1200000 },
    { id: 2, name: '키보드', price: 50000 },
    { id: 3, name: '마우스', price: 30000 },
  ];
  return <ProductList products={products} />;
}
