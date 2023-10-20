import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NewsDetails from './components/NewsDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsDetails/:newsId" element={<NewsDetails />} />
      </Routes>
    </>
  );
}

export default App;
