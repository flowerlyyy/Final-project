import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { DeliveryPage } from './pages/DeliveryPage/DeliveryPage';
import { DietsPage } from './pages/DietsPage/DietsPage';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';
import { MenuPage } from './pages/MenuPage/MenuPage';
import { SigninPage } from './pages/SigninPage/SigninPage';

function App() {
  return (
    <div className="App">
      <main>
      <Routes>
        <Route path="/" element ={<HomePage/>}/>
        <Route path="delivery" element={<DeliveryPage/>}/>
        <Route path="diets" element={<DietsPage/>}/>
        <Route path="footer" element={<Footer/>}/>
        <Route path="header" element={<Header/>}/>
        <Route path="menu" element={<MenuPage/>}/>
        <Route path="signin" element={<SigninPage/>}/>
      </Routes>
      </main>
      
      <footer>
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
