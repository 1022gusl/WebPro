function Header(props) {
  const { title, onChangeMode } = props;

  return (
    <header>
      <h1 className="text-2xl mb-4">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onChangeMode();
          }}
        >
          {title}
        </a>
      </h1>
    </header>
  );
}

export default Header;
