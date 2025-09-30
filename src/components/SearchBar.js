function SearchBar(props) {
  const { filter, stock, changeFilter, changeStock } = props;

  return (
    <form>
      <input
        className="border border-black"
        type="text"
        value={filter}
        onChange={changeFilter}
      />
      <p>
        <input type="checkbox" checked={stock} onChange={changeStock} />
        Only show products in stock
      </p>
    </form>
  );
}

export default SearchBar;
