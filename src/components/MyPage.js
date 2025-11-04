import { useState } from 'react';
import Login from './Login';
function MyPage() {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const handleIdChange = (e) => setId(e.target.value);
  const handlePwdChange = (e) => setPwd(e.target.value);
  const isAuthenticated = id === 'cbkim' && pwd === '1111';

  if (!isAuthenticated) {
    // ✅ 로그인되지 않았을 때
    return (
      <Login
        id={id}
        pwd={pwd}
        changeId={handleIdChange}
        changePwd={handlePwdChange}
      />
    );
  }
  return (
    // ✅ 로그인 성공 시
    <div>
      <h3>김창복의 My Page</h3>
      <p>로그인 해야 볼 수 있는 개인자료</p>
    </div>
  );
}
export default MyPage;
