import './App.css';
import { DeliveryPage } from './pages/DeliveryPage/DeliveryPage';
import { DietsPage } from './pages/DietsPage/DietsPage';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { MenuPage } from './pages/MenuPage/MenuPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { SignupPage } from './pages/SignupPage/SignupPage';
import { TestPage } from './pages/TestPage/TestPage';
import { User } from './models/User';
import { baseUrl } from './constants';
import { getValueFromLocalStorage } from './services/localStorage.service';
import { logIn } from './store/currentUserSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const authToken = getValueFromLocalStorage('authToken');
    if (authToken) {
      fetch(`${baseUrl}/users/current`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
        .then((response) => response.json())
        .then((data: User) => dispatch(logIn({ user: data })));
    } else {
      navigate('/log-in');
    }
  }, []);
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
          <Route path="sign-up" element={<SignupPage />} />
          <Route path="testpage" element={<TestPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="log-in" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
