import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllHome from './HomePage/AllHome';
import MenuPage from './HomePage/MenuPage';
import LocationPage from './HomePage/LocationPage';
import AboutPage from './HomePage/Aboutpage';
import NewsPage from './HomePage/NewsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllHome />} />
        <Route path='/home' element={<AllHome />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/location' element={<LocationPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/news' element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
