import './App.css';
import { DeliveryPage } from './pages/DeliveryPage/DeliveryPage';
import { DietsPage } from './pages/DietsPage/DietsPage';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { MenuPage } from './pages/MenuPage/MenuPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { Route, Routes } from 'react-router-dom';
import { SignupPage } from './pages/SignupPage/SignupPage';
import { TestPage } from './pages/TestPage/TestPage';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="diets" element={<DietsPage />} />
          <Route path="footer" element={<Footer />} />
          <Route path="header" element={<Header />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="sign-up" element={<SignupPage />} />
          <Route path="testpage" element={<TestPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="log-in" element={<LoginPage />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
