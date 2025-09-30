function Nav({ datas, onChangeMode }) {
  const lis = datas.map((data) => (
    <li key={data.id}>
      <a
        href="/"
        onClick={(event) => {
          event.preventDefault();
          onChangeMode(data.body);
        }}
      >
        {data.title}
      </a>
    </li>
  ));

  return (
    <nav>
      <ol className="list-decimal ml-6 mb-6">{lis}</ol>
    </nav>
  );
}

export default Nav;
