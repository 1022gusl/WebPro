import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Index from './Component/Index';
import Introduction from './Component/Introduction';
import Project from './Component/Project';
import Contest from './Component/Contest';
import Career from './Component/Career';
import './App.css';
//css 파일엔 공통부분만 최소한으로 남겨두고 테일윈드를 사용했습니다.

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-blue-500 text-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex flex-col items-center py-4">
            <h1 className="text-3xl font-bold">김창복 포트폴리오</h1>
            <p className="text-lg">준비된 개발자</p>
          </div>

          <nav className="bg-blue-100 text-black">
            <ul className="flex justify-center space-x-8 py-3 text-lg font-medium">
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  메인
                </Link>
              </li>
              <li>
                <Link
                  to="/introduction"
                  className="hover:text-blue-500 transition"
                >
                  자기소개
                </Link>
              </li>
              <li>
                <Link to="/project" className="hover:text-blue-500 transition">
                  프로젝트
                </Link>
              </li>
              <li>
                <Link to="/contest" className="hover:text-blue-500 transition">
                  대회/수상
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-blue-500 transition">
                  경력
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contest" element={<Contest />} />
              <Route path="/career" element={<Career />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-blue-200 text-center py-6 border-t border-blue-300">
          <i className="text-sm text-gray-700">
            © 2023. 지은이 All rights reserved.
            <br />
            연락처 : 010-8906-3946
          </i>
        </footer>
      </div>
    </BrowserRouter>
  );
}
