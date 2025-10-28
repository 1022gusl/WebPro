import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Index from './components/Index';
import Introduction from './components/Introduction';
import Project from './components/Project';
import Career from './components/Career';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <header>
        박연학의 portfolio <br />
        "노력하는 개발자"
      </header>
      <div className="container">
        <nav>
          <Link to="/introduction">나의 소개</Link>
          <Link to="/project">프로젝트</Link>
          <Link to="/career">나의 경력</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/project" element={<Project />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </main>
      </div>

      <footer>
        <i>
          Copyright 2025. 지은이 all rights reserved.
          <br />
          연락처 : 010-4377-3795
        </i>
      </footer>
    </BrowserRouter>
  );
}
