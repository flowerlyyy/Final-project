import './App.css';
import { DeliveryPage } from './pages/DeliveryPage/DeliveryPage';
import { DietsPage } from './pages/DietsPage/DietsPage';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { MenuPage } from './pages/MenuPage/MenuPage';
import { Route, Routes } from 'react-router-dom';
import { SigninPage } from './pages/SigninPage/SigninPage';
import { TestPage } from './pages/TestPage/TestPage';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="diets" element={<DietsPage />} />
          <Route path="footer" element={<Footer />} />
          <Route path="header" element={<Header />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="testpage" element={<TestPage />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
