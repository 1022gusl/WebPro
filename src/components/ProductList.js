function ProductList() {
  const productList = ['무선 이어폰', '스마트 워치', '게이밍 키보드'];

  return (
    <section id="productList" className="mb-4">
      <h2 className="text-xl font-bold">🛍️ 인기 상품</h2>
      <ul className="ml-4 mt-4 list-disc list-inside">
        {productList.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;
