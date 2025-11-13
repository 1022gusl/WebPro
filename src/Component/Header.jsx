import NavBar from './NavBar';

export default function Header() {
  return (
    <header className="bg-blue-500 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-col items-center py-4">
        <h1 className="text-3xl font-bold">박연학의 포트폴리오</h1>
        <p className="text-lg">매일매일 노력하는 개발자입니다!</p>
      </div>

      <NavBar />
    </header>
  );
}
