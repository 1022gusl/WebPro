import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import MyPage from './components/MyPage';
import Recommend from './components/Recommend';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Link to="/" className="item">
            {' '}
            Home{' '}
          </Link>
          <Link to="/mypage" className="item">
            {' '}
            MyPage{' '}
          </Link>
          <Link to="/recommend" className="item">
            {' '}
            Recommand{' '}
          </Link>
          <Link to="/search" className="item">
            {' '}
            Search{' '}
          </Link>
        </div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/mypage" Component={MyPage} />
          <Route path="/recommend" Component={Recommend} />
          <Route path="/search" Component={Search} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
