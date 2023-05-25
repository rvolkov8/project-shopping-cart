import { Routes, Route } from 'react-router-dom';
import Home from './Home';

const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Main;
