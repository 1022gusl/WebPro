function Login({ id, pwd, changeId, changePwd }) {
  return (
    <div>
      <h2>로그인 페이지</h2>

      <div>
        <label>아이디: </label>
        <input
          type="text"
          value={id}
          onChange={changeId}
          placeholder="아이디를 입력하세요"
        />
      </div>

      <div>
        <label>비밀번호: </label>
        <input
          type="password"
          value={pwd}
          onChange={changePwd}
          placeholder="비밀번호를 입력하세요"
        />
      </div>

      <p>아이디: cbkim / 비밀번호: 1111 입력 시 로그인됩니다.</p>
    </div>
  );
}

export default Login;
