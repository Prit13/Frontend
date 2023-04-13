import './App.css';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Password from './Password';
import Upload from './Upload';





function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/password" element={<Password />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
