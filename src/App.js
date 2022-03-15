import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './assets/css/App.css';


import HomePage from './pages/homePage';
import ArticlePage from './pages/articlePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index exact element={<HomePage />} />
        <Route path='article' exact element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
