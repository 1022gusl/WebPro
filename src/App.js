import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import MyPage from './components/MyPage';
import Recommend from './components/Recommend';
import Search from './components/Search';
import Posts from './components/Posts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="header">
          <Link to="/" className="item">
            Home
          </Link>
          <Link to="/mypage/2" className="item">
            MyPage
          </Link>
          <Link to="/recommend" className="item">
            Recommend
          </Link>
          <Link to="/search" className="item">
            Search
          </Link>
          <Link to="/posts" className="item">
            Posts
          </Link>
        </nav>

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/mypage/:name" Component={MyPage} />
          <Route path="/recommend" Component={Recommend} />
          <Route path="/search" Component={Search} />
          <Route path="/posts/*" Component={Posts} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
