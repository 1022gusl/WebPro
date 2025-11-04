import { Routes, Route, Link } from 'react-router-dom';
import JSX from './JSX';
import Props from './Props';
import State from './State';

function Posts() {
  return (
    <div>
      <h1>Post Page</h1>
      <Link to="/posts/jsx">JSX !!!</Link> <br />
      <Link to="/posts/props">Props !!!</Link> <br />
      <Link to="/posts/state">State !!!</Link> <br />
      <Routes>
        <Route path="jsx" Component={JSX} />
        <Route path="props" Component={Props} />
        <Route path="state" Component={State} />
      </Routes>
    </div>
  );
}

export default Posts;
