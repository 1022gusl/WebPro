function Header() {
  return (
    <header>
      <h1 className="text-2xl font-bold">React 쇼핑몰</h1>
      <nav>
        <ul className="ml-4 list-disc list-inside mb-4">
          <li>
            <a href="#home">홈</a>
          </li>
          <li>
            <a href="#products">상품</a>
          </li>
          <li>
            <a href="#cart">장바구니</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
