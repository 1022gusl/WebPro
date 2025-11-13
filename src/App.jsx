import { Routes, Route, useLocation } from 'react-router-dom';
import Index from './Component/Index';
import Project from './Component/Project';
import Career from './Component/Career';
import './App.css';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import Landing from './Component/Landing';
import Header from './Component/Header';
import Footer from './Component/Footer';
import License from './Component/License';

export default function App() {
  const location = useLocation();
  useDocumentTitle(location);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Index />} />
            <Route path="/project" element={<Project />} />
            <Route path="/License" element={<License />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}
