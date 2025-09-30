import Category from './Category';
import ProductRow from './ProductRow';

function Product({ datas, filter, stock }) {
  const filteredDatas = datas.filter((data) => {
    const matchesFilter = data.name
      .toLowerCase()
      .includes(filter.toLowerCase());

    const matchesStock = !stock || data.stocked;

    return matchesFilter && matchesStock;
  });
  return (
    <table>
      <thead>
        <tr className="flex justify-between">
          <th>Name</th> <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {filteredDatas.map((data, idx) => (
          <div key={idx}>
            {(idx === 0 ||
              filteredDatas[idx - 1].category !== data.category) && (
              <Category category={data.category} />
            )}

            <ProductRow data={data} />
          </div>
        ))}
      </tbody>
    </table>
  );
}

export default Product;
