import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Product from './components/Product';
import Datas from './components/Datas';

function App() {
  const [filter, setFilter] = useState('');
  const [stock, setStock] = useState(false);

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };

  const changeStock = (e) => {
    setStock(e.target.checked);
  };
  return (
    <div className="m-5">
      <SearchBar
        filter={filter}
        stock={stock}
        changeFilter={changeFilter}
        changeStock={changeStock}
      />
      <Product datas={Datas} filter={filter} stock={stock} />
    </div>
  );
}

export default App;
