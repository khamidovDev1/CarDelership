import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage1 from './pages/main1/MainPage1';
import MainPage2 from './pages/main2/MainPage2';
import MainPage3 from './pages/main3/MainPage3';
import MainPage4 from './pages/main4/MainPage4';
import MainPage5 from './pages/main5/MainPage5';
import MainPage6 from './pages/main6/MainPage6';
import Navbar from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/main1page' element={<MainPage1 />} />
                <Route path='/main2page' element={<MainPage2 />} />
                <Route path='/main3page' element={<MainPage3 />} />
                <Route path='/main4page' element={<MainPage4 />} />
                <Route path='/main5page' element={<MainPage5 />} />
                <Route path='/main6page' element={<MainPage6 />} />

            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
