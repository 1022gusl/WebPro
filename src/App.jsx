function UserInfo({ user }) {
  const isMinor = user.age < 18;
  return (
    <div className="m-4">
      <h1 className="font-bold text-xl">문제 3) 사용자 정보</h1>
      <div className="flex flex-col gap-2 mt-4">
        <p>이름: {user.name}</p>
        <p>나이: {user.age}</p>
        {isMinor && <p>미성년자</p>}
      </div>
    </div>
  );
}

export default function App() {
  const user = { name: '홍길동', age: 17 };
  return <UserInfo user={user} />;
}
